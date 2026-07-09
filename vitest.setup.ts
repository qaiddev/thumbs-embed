/**
 * Test environment shim for Web Storage.
 *
 * Node 25 ships an experimental native `localStorage` that, started
 * without a `--localstorage-file` path, exposes an object missing the
 * standard methods (`localStorage.removeItem is not a function`). That
 * native global shadows the one happy-dom provides, so tests that touch
 * storage — and every test that constructs the widget, since it reads a
 * visitor id — fail.
 *
 * Install a real class-based Storage so `localStorage` is a `Storage`
 * instance (tests that `vi.spyOn(Storage.prototype, ...)` need the methods
 * on the prototype) and reset it before each test for isolation.
 */
import { beforeEach } from "vitest";

class MemStorage {
  private m = new Map<string, string>();
  get length(): number {
    return this.m.size;
  }
  clear(): void {
    this.m.clear();
  }
  getItem(key: string): string | null {
    return this.m.has(key) ? this.m.get(key)! : null;
  }
  setItem(key: string, value: string): void {
    this.m.set(String(key), String(value));
  }
  removeItem(key: string): void {
    this.m.delete(key);
  }
  key(index: number): string | null {
    return Array.from(this.m.keys())[index] ?? null;
  }
}

const localStorageInstance = new MemStorage();
const sessionStorageInstance = new MemStorage();

function define(target: object, name: string, value: unknown): void {
  Object.defineProperty(target, name, {
    value,
    configurable: true,
    writable: true,
  });
}

function install(): void {
  define(globalThis, "Storage", MemStorage);
  define(globalThis, "localStorage", localStorageInstance);
  define(globalThis, "sessionStorage", sessionStorageInstance);
  if (typeof window !== "undefined") {
    define(window, "Storage", MemStorage);
    define(window, "localStorage", localStorageInstance);
    define(window, "sessionStorage", sessionStorageInstance);
  }
}

install();
beforeEach(() => {
  install();
  localStorageInstance.clear();
  sessionStorageInstance.clear();
});
