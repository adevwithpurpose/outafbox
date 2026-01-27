import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_mNGvJEK9.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/antigravity/outafbox/","cacheDir":"file:///D:/antigravity/outafbox/node_modules/.astro/","outDir":"file:///D:/antigravity/outafbox/dist/","srcDir":"file:///D:/antigravity/outafbox/src/","publicDir":"file:///D:/antigravity/outafbox/public/","buildClientDir":"file:///D:/antigravity/outafbox/dist/client/","buildServerDir":"file:///D:/antigravity/outafbox/dist/server/","adapterName":"","routes":[{"file":"file:///D:/antigravity/outafbox/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/antigravity/outafbox/dist/case-studies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/case-studies","isIndex":false,"type":"page","pattern":"^\\/case-studies\\/?$","segments":[[{"content":"case-studies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/case-studies.astro","pathname":"/case-studies","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/antigravity/outafbox/dist/ecosystem/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ecosystem","isIndex":false,"type":"page","pattern":"^\\/ecosystem\\/?$","segments":[[{"content":"ecosystem","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ecosystem.astro","pathname":"/ecosystem","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/antigravity/outafbox/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/antigravity/outafbox/dist/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/antigravity/outafbox/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/antigravity/outafbox/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/case-studies.astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/ecosystem.astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["D:/antigravity/outafbox/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/case-studies@_@astro":"pages/case-studies.astro.mjs","\u0000@astro-page:src/pages/ecosystem@_@astro":"pages/ecosystem.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B-BOwlMW.mjs","D:/antigravity/outafbox/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bs6bph02.mjs","D:/antigravity/outafbox/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CMQnWihM.js","D:/antigravity/outafbox/src/components/blocks/AuditFormBlock.astro?astro&type=script&index=0&lang.ts":"_astro/AuditFormBlock.astro_astro_type_script_index_0_lang.XXPeo30v.js","D:/antigravity/outafbox/src/components/landing/HeroCalculator.astro?astro&type=script&index=0&lang.ts":"_astro/HeroCalculator.astro_astro_type_script_index_0_lang.Cr5KpLs6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/antigravity/outafbox/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-btn\"),e=document.getElementById(\"mobile-menu\");t?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),e?.classList.toggle(\"flex\")});"],["D:/antigravity/outafbox/src/components/blocks/AuditFormBlock.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"calc-btn\"),r=document.getElementById(\"calc-result\"),u=document.getElementById(\"calc-placeholder\"),d=document.getElementById(\"calc-amount\");e&&e.addEventListener(\"click\",()=>{const t=document.getElementById(\"calc-traffic\"),c=document.getElementById(\"calc-cr\"),n=document.getElementById(\"calc-aov\");if(!t||!c||!n)return;const a=parseFloat(t.value.replace(/,/g,\"\")),o=parseFloat(c.value),s=parseFloat(n.value.replace(/,/g,\"\"));if(!a||!o||!s){e.classList.add(\"translate-x-1\"),setTimeout(()=>e.classList.remove(\"translate-x-1\"),200);return}const l=a*(o/100)*s,m=l*1.3-l,i=new Intl.NumberFormat(\"en-US\",{style:\"currency\",currency:\"USD\",maximumFractionDigits:0});d&&r&&(d.textContent=i.format(m),r.classList.remove(\"hidden\"),u&&u.classList.add(\"hidden\"))});"],["D:/antigravity/outafbox/src/components/landing/HeroCalculator.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"hero-ad-spend\"),u=document.getElementById(\"hero-current-roas\"),l=document.getElementById(\"hero-current-rev\"),m=document.getElementById(\"hero-projected-rev\"),d=document.getElementById(\"hero-leak-amount\"),v=3.2;function y(t){return new Intl.NumberFormat(\"en-US\").format(t)}function i(t){return parseFloat(t.replace(/,/g,\"\"))||0}function s(){if(!e||!u)return;const t=i(e.value),o=parseFloat(u.value)||0,r=t*o,a=Math.max(v,o*1.2),n=t*a,p=n-r,c=h=>new Intl.NumberFormat(\"en-US\",{style:\"currency\",currency:\"USD\",maximumFractionDigits:0}).format(h);l&&(l.textContent=c(r)),m&&(m.textContent=c(n)),d&&(d.textContent=\"+\"+c(p))}e?.addEventListener(\"input\",()=>{const t=e.selectionStart,o=e.value.length,r=i(e.value);e.value=y(r);const a=e.value.length,n=Math.max(0,t+(a-o));e.setSelectionRange(n,n),s()});u?.addEventListener(\"input\",s);s();"]],"assets":["/file:///D:/antigravity/outafbox/dist/about/index.html","/file:///D:/antigravity/outafbox/dist/case-studies/index.html","/file:///D:/antigravity/outafbox/dist/ecosystem/index.html","/file:///D:/antigravity/outafbox/dist/privacy/index.html","/file:///D:/antigravity/outafbox/dist/terms/index.html","/file:///D:/antigravity/outafbox/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"QkKWhoh9X/lO/b0EoEeqth7dWW3q8cPfuD0bPJludKM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
