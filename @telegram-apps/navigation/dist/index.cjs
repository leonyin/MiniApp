"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function i(){return performance.getEntriesByType("navigation")[0]}function a(){const t=i();return!!t&&t.type==="reload"}function o(t,e){return t.startsWith(e)?t:`${e}${t}`}function R(t){return new URL(typeof t=="string"?t:[t.pathname||"",o(t.search||"","?"),o(t.hash||"","#")].join(""),"http://a")}function r(t){const e=(typeof t=="string"?t:t.pathname||"").startsWith("/"),n=R(t),{pathname:s}=n;return`${e?s:s.slice(1)}${n.search}${n.hash}`}const c="ERR_NAVIGATION_HISTORY_EMPTY",_="ERR_NAVIGATION_CURSOR_INVALID";exports.ERR_CURSOR_INVALID=_;exports.ERR_HISTORY_EMPTY=c;exports.createSafeURL=R;exports.ensurePrefix=o;exports.getFirstNavigationEntry=i;exports.isPageReload=a;exports.urlToPath=r;
//# sourceMappingURL=index.cjs.map