/**
 * The property embed.js sets on the tag it injects, pointing back at the
 * customer's own `<script src=".../embed.js">`. An expando, not an attribute:
 * markup injected into the page can't forge it. Its own module so embed.js
 * (ES5, tiny) can share it with the bootstrap without pulling the bootstrap in.
 */
export declare var ORIGIN_KEY_NAME: string;
