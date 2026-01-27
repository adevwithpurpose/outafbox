import { c as createComponent, m as maybeRenderHead, d as renderScript, a as renderTemplate, e as addAttribute, r as renderComponent, b as createAstro, u as unescapeHTML } from './astro/server_mNGvJEK9.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { marked } from 'marked';
import { $ as $$Testimonials } from './Testimonials_BYS2tib0.mjs';
import { a as $$TeamGrid, $ as $$Founder } from './Founder_DGAoB6vL.mjs';
import { createClient } from 'tinacms/dist/client';

const $$HeroCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl relative max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500" data-astro-cid-3cu4ezaa> <!-- Subtle inner glow, no heavy blur --> <div class="absolute inset-0 bg-brand-purple/5 rounded-2xl -z-10" data-astro-cid-3cu4ezaa></div> <div class="mb-6 flex justify-between items-center" data-astro-cid-3cu4ezaa> <h3 class="font-bold text-white text-lg" data-astro-cid-3cu4ezaa>Revenue Leak Audit</h3> <div class="flex items-center gap-2" data-astro-cid-3cu4ezaa> <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" data-astro-cid-3cu4ezaa></span> <span class="text-xs text-green-400 font-mono tracking-wider" data-astro-cid-3cu4ezaa>LIVE</span> </div> </div> <div class="space-y-4" data-astro-cid-3cu4ezaa> <div data-astro-cid-3cu4ezaa> <label class="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wide" data-astro-cid-3cu4ezaa>
Monthly Ad Spend ($)
</label> <input type="text" id="hero-ad-spend" class="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white font-mono text-lg focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="50,000" value="50,000" inputmode="numeric" data-astro-cid-3cu4ezaa> </div> <div data-astro-cid-3cu4ezaa> <label class="block text-xs font-bold text-gray-400 mb-1.5 uppercase tracking-wide" data-astro-cid-3cu4ezaa>
Current ROAS (x)
</label> <input type="text" id="hero-current-roas" class="w-full bg-black/60 border border-white/10 rounded-lg p-3 text-white font-mono text-lg focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple transition-all" placeholder="2.1" value="2.1" inputmode="decimal" data-astro-cid-3cu4ezaa> </div> <div class="pt-4 border-t border-white/10 mt-2" data-astro-cid-3cu4ezaa> <div class="flex justify-between items-end mb-1" data-astro-cid-3cu4ezaa> <span class="text-xs text-gray-500 uppercase tracking-wider" data-astro-cid-3cu4ezaa>Current Revenue</span> <span class="text-lg font-bold text-gray-500 font-mono" id="hero-current-rev" data-astro-cid-3cu4ezaa>$105,000</span> </div> <div class="flex justify-between items-end mb-4" data-astro-cid-3cu4ezaa> <span class="text-sm font-bold text-white" data-astro-cid-3cu4ezaa>Projected (3.2x ROAS)</span> <span class="text-2xl font-black text-brand-purple font-mono" id="hero-projected-rev" data-astro-cid-3cu4ezaa>$160,000</span> </div> <div class="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 p-3 rounded-lg" data-astro-cid-3cu4ezaa> <div class="flex justify-between items-center" data-astro-cid-3cu4ezaa> <div class="text-xs text-green-400 font-bold uppercase tracking-wider" data-astro-cid-3cu4ezaa>
Missed Profit
</div> <div class="text-xl font-bold text-green-400 font-mono" id="hero-leak-amount" data-astro-cid-3cu4ezaa>
+$55,000
</div> </div> </div> </div> </div> </div> ${renderScript($$result, "D:/antigravity/outafbox/src/components/landing/HeroCalculator.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/antigravity/outafbox/src/components/landing/HeroCalculator.astro", void 0);

const $$Astro$m = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  const isFullHero = data.showCalculator || data.image;
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center text-red-500" data-astro-cid-7vszemnk>
Error: No data provided to Hero
</section>` : isFullHero ? (
    /* --- FULL HERO (Homepage with Calculator or Image) --- */
    renderTemplate`<section class="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden" data-astro-cid-7vszemnk><!-- Background Glows --><div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl opacity-50 animate-pulse" data-astro-cid-7vszemnk></div><div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl opacity-40" data-astro-cid-7vszemnk></div><div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-7vszemnk><!-- Text Content --><div class="space-y-8" data-astro-cid-7vszemnk><h1 class="text-5xl md:text-7xl font-black tracking-tight leading-tight" data-astro-cid-7vszemnk>${data.heroHeadline}</h1><p class="text-xl text-gray-300 max-w-lg leading-relaxed" data-astro-cid-7vszemnk>${data.heroSubhead}</p><div class="flex flex-wrap gap-4 pt-4" data-astro-cid-7vszemnk>${data.ctaText && renderTemplate`<a${addAttribute(data.ctaLink || "#", "href")} class="relative px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-lg transition-all glow-purple group overflow-hidden" data-astro-cid-7vszemnk><span class="relative z-10" data-astro-cid-7vszemnk>${data.ctaText}</span><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-astro-cid-7vszemnk></div></a>`}${data.secondaryCtaText && renderTemplate`<a${addAttribute(data.secondaryCtaLink || "#", "href")} class="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all backdrop-blur-sm" data-astro-cid-7vszemnk>${data.secondaryCtaText}</a>`}</div></div>${data.showCalculator ? renderTemplate`<div class="relative perspective-1000 group" data-astro-cid-7vszemnk><!-- Floating Orb behind --><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-purple/40 rounded-full blur-[100px]" data-astro-cid-7vszemnk></div>${renderComponent($$result, "HeroCalculator", $$HeroCalculator, { "data-astro-cid-7vszemnk": true })}</div>` : data.image ? renderTemplate`<div class="relative group" data-astro-cid-7vszemnk><div class="absolute inset-0 bg-brand-purple/20 blur-3xl rounded-full opacity-50 -z-10" data-astro-cid-7vszemnk></div><img${addAttribute(data.image, "src")}${addAttribute(data.heroHeadline, "alt")} class="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl transform group-hover:scale-105 transition-transform duration-500" data-astro-cid-7vszemnk></div>` : null}</div></section>`
  ) : (
    /* --- COMPACT HERO (Subpages: text only, no full screen) --- */
    renderTemplate`<section class="relative pt-36 pb-16 overflow-hidden" data-astro-cid-7vszemnk><!-- Subtle Background Glow --><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/20 rounded-full blur-[100px] opacity-50" data-astro-cid-7vszemnk></div><div class="container mx-auto px-6 relative z-10 text-center max-w-3xl" data-astro-cid-7vszemnk><h1 class="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6" data-astro-cid-7vszemnk>${data.heroHeadline}</h1>${data.heroSubhead && renderTemplate`<p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8" data-astro-cid-7vszemnk>${data.heroSubhead}</p>`}${(data.ctaText || data.secondaryCtaText) && renderTemplate`<div class="flex flex-wrap gap-4 justify-center" data-astro-cid-7vszemnk>${data.ctaText && renderTemplate`<a${addAttribute(data.ctaLink || "#", "href")} class="relative px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-lg transition-all glow-purple group overflow-hidden" data-astro-cid-7vszemnk><span class="relative z-10" data-astro-cid-7vszemnk>${data.ctaText}</span><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" data-astro-cid-7vszemnk></div></a>`}${data.secondaryCtaText && renderTemplate`<a${addAttribute(data.secondaryCtaLink || "#", "href")} class="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold rounded-lg transition-all backdrop-blur-sm" data-astro-cid-7vszemnk>${data.secondaryCtaText}</a>`}</div>`}</div></section>`
  )}`;
}, "D:/antigravity/outafbox/src/components/landing/Hero.astro", void 0);

const $$Astro$l = createAstro();
const $$HeroBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$HeroBlock;
  const { data } = Astro2.props;
  const heroData = {
    heroHeadline: data.headline,
    heroSubhead: data.subhead,
    ctaText: data.ctaText,
    // Don't force a default - let Hero handle showing/hiding
    ctaLink: data.ctaLink || "/audit",
    secondaryCtaText: data.secondaryCtaText,
    secondaryCtaLink: data.secondaryCtaLink,
    image: data.image,
    // Only show calculator on the main homepage hero
    showCalculator: data.headline && data.headline.includes("Scale Your DTC")
  };
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "data": heroData })}`;
}, "D:/antigravity/outafbox/src/components/blocks/HeroBlock.astro", void 0);

const $$Astro$k = createAstro();
const $$Solution = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Solution;
  const { data } = Astro2.props;
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<div>Error loading Solution data</div>` : renderTemplate`<section class="py-24 relative"><!-- Background Elements --><div class="absolute right-0 top-1/3 w-1/3 h-1/3 bg-brand-purple/20 blur-[100px] rounded-full"></div><div class="absolute left-0 bottom-1/3 w-1/3 h-1/3 bg-brand-blue/20 blur-[100px] rounded-full"></div><div class="container mx-auto px-6 relative z-10"><h2 class="text-4xl md:text-6xl font-black text-center mb-20">${data.solutionHeadline}</h2><div class="grid md:grid-cols-3 gap-8 relative"><!-- Connecting Line (only visible on large screens) --><div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent -translate-y-1/2 z-0"></div>${data.solutionCards && data.solutionCards.map((card, index) => renderTemplate`<div${addAttribute(`glass-panel p-8 rounded-3xl relative z-10 hover:-translate-y-2 transition-transform duration-300 ${index === 1 ? "border-brand-purple/50 shadow-[0_0_30px_rgba(124,58,237,0.15)]" : ""}`, "class")}><div${addAttribute(`h-16 w-16 ${index === 1 ? "bg-brand-purple/20 shadow-[0_0_15px_rgba(124,58,237,0.3)]" : index === 2 ? "bg-brand-blue/20 shadow-[0_0_15px_rgba(37,99,235,0.3)]" : "bg-brand-pink/20 shadow-[0_0_15px_rgba(219,39,119,0.3)]"} rounded-2xl flex items-center justify-center mb-6 text-3xl`, "class")}>${card.icon}</div><h3 class="text-2xl font-bold mb-4">${card.title}</h3><p class="text-gray-300">${card.description}</p></div>`)}</div></div></section>`}`;
}, "D:/antigravity/outafbox/src/components/landing/Solution.astro", void 0);

const $$Astro$j = createAstro();
const $$Problem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Problem;
  const { data } = Astro2.props;
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<div class="text-red-500 p-4" data-astro-cid-c7jrviqr>Error: No Data for Problem Section</div>` : renderTemplate`<section class="py-24 relative overflow-hidden" data-astro-cid-c7jrviqr><div class="container mx-auto px-6 relative z-10" data-astro-cid-c7jrviqr><h2 class="text-4xl md:text-6xl font-black text-center mb-16" data-astro-cid-c7jrviqr>${data.problemHeadline}<br data-astro-cid-c7jrviqr><span class="text-red-500 text-glow-red" data-astro-cid-c7jrviqr> 'Ad Fatigue' Wall.</span></h2><div class="grid md:grid-cols-3 gap-8" data-astro-cid-c7jrviqr>${data.problemCards && data.problemCards.map((card) => renderTemplate`<div class="glass-panel p-8 rounded-2xl border-l-4 border-l-red-500 hover:bg-white/10 transition-colors group" data-astro-cid-c7jrviqr><div class="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all" data-astro-cid-c7jrviqr>${card.icon}</div><h3 class="text-2xl font-bold mb-4" data-astro-cid-c7jrviqr>${card.title}</h3><p class="text-gray-400" data-astro-cid-c7jrviqr>${card.description}</p></div>`)}</div></div><!-- Red background glow --><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-900/5 blur-[120px] pointer-events-none" data-astro-cid-c7jrviqr></div></section>`}`;
}, "D:/antigravity/outafbox/src/components/landing/Problem.astro", void 0);

const $$Astro$i = createAstro();
const $$FeatureGridBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$FeatureGridBlock;
  const { data } = Astro2.props;
  const isProblem = data.id === "problem" || data.headline && data.headline.toLowerCase().includes("why");
  const mappedData = {
    // Problem component expects: problemHeadline, problemCards
    problemHeadline: data.headline,
    problemCards: data.items,
    // Solution component expects: solutionHeadline, solutionCards
    solutionHeadline: data.headline,
    solutionCards: data.items
  };
  return renderTemplate`${isProblem ? renderTemplate`${renderComponent($$result, "Problem", $$Problem, { "data": mappedData })}` : renderTemplate`${renderComponent($$result, "Solution", $$Solution, { "data": mappedData })}`}`;
}, "D:/antigravity/outafbox/src/components/blocks/FeatureGridBlock.astro", void 0);

const $$Astro$h = createAstro();
const $$ContentBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ContentBlock;
  const { data } = Astro2.props;
  const bodyContent = typeof data.body === "string" ? await marked.parse(data.body) : "";
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6 relative"> <div${addAttribute(`container mx-auto max-w-4xl prose prose-invert prose-lg ${data.centered ? "text-center" : ""}`, "class")}>${unescapeHTML(bodyContent)}</div> </section>`;
}, "D:/antigravity/outafbox/src/components/blocks/ContentBlock.astro", void 0);

const $$Astro$g = createAstro();
const $$TestimonialsBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$TestimonialsBlock;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Testimonials", $$Testimonials, {})}`;
}, "D:/antigravity/outafbox/src/components/blocks/TestimonialsBlock.astro", void 0);

const $$Astro$f = createAstro();
const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TrustBar;
  const { data } = Astro2.props;
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<div class="text-red-500">Error: No data in TrustBar</div>` : renderTemplate`<section class="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm"><div class="container mx-auto px-6 text-center"><p class="text-sm text-gray-400 mb-8 uppercase tracking-widest font-semibold">${data.trustLabel}</p><div class="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"><!-- Logo Placeholders using simple text/shapes for now --><!-- Logo 1: Nexus (Geometric) --><svg class="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 15L25 5H5L15 15Z" fill="white"></path><path d="M15 15L25 25H5L15 15Z" fill="white"></path><text x="35" y="20" font-family="sans-serif" font-weight="900" font-size="18" fill="white" letter-spacing="1">NEXUS</text></svg><!-- Logo 2: Vortex (Circular) --><svg class="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 130 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="10" stroke="white" stroke-width="4"></circle><text x="35" y="20" font-family="sans-serif" font-weight="900" font-size="18" fill="white" letter-spacing="1">VORTEX</text></svg><!-- Logo 3: Apex (Triangle/Mountain) --><svg class="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15 5L25 25H5L15 5Z" fill="white"></path><text x="35" y="20" font-family="sans-serif" font-weight="900" font-size="18" fill="white" letter-spacing="1">APEX</text></svg><!-- Logo 4: Cipher (Tech/Code) --><svg class="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="20" height="20" rx="4" stroke="white" stroke-width="3" fill="none"></rect><circle cx="15" cy="15" r="3" fill="white"></circle><text x="35" y="20" font-family="sans-serif" font-weight="900" font-size="18" fill="white" letter-spacing="1">CIPHER</text></svg><!-- Logo 5: Velocity (Italic/Fast) --><svg class="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 140 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H30L20 25H0L10 5Z" fill="white"></path><text x="40" y="20" font-family="sans-serif" font-weight="900" font-size="18" fill="white" letter-spacing="1" font-style="italic">VELOCITY</text></svg></div></div></section>`}`;
}, "D:/antigravity/outafbox/src/components/landing/TrustBar.astro", void 0);

const $$Astro$e = createAstro();
const $$TrustBarBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$TrustBarBlock;
  const { data } = Astro2.props;
  const mappedData = {
    trustLabel: data.label
  };
  return renderTemplate`${renderComponent($$result, "TrustBar", $$TrustBar, { "data": mappedData })}`;
}, "D:/antigravity/outafbox/src/components/blocks/TrustBarBlock.astro", void 0);

const $$Astro$d = createAstro();
const $$AuditFormBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AuditFormBlock;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="apply" class="max-w-4xl mx-auto py-12"> <!-- Primary Application Form (Centered) --> <div class="max-w-2xl mx-auto mb-20"> <div class="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none"></div> <h2 class="text-3xl font-display font-bold mb-6 flex items-center gap-3"> <span class="w-1.5 h-8 bg-brand-blue rounded-full"></span> ${data.headline || "Apply for a Growth Audit"} </h2> <p class="text-gray-400 mb-8 leading-relaxed">
We only work with brands doing $10M+ (or those with the runway
                to get there). Our team will manually review your ad account and
                landing pages to find the leaks.
</p> <form class="space-y-6 relative z-10"> <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-medium text-gray-400 mb-2">Work Email</label> <input type="email" placeholder="founder@brand.com" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-white placeholder-gray-600 transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-2">Brand URL</label> <input type="text" placeholder="yourbrand.com" class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-white placeholder-gray-600 transition-all"> </div> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-2">Monthly Revenue</label> <div class="relative"> <select class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-gray-300 appearance-none cursor-pointer focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" style="color-scheme: dark;"> <option value="" disabled selected>Select revenue range</option> <option value="<1M">Less than $1M</option> <option value="1M-10M">$1M - $10M</option> <option value="10M+">$10M+</option> </select> <div class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </div> </div> </div> <button type="submit" class="w-full bg-white text-black font-bold py-4 rounded-xl text-lg hover:scale-[1.01] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer">
Request Free Audit
</button> </form> </div> </div> <!-- Secondary: Calculator (Value Add) --> <div class="max-w-4xl mx-auto mb-20"> <div class="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02]"> <div class="flex flex-col md:flex-row gap-12 items-center"> <div class="flex-1"> <h3 class="text-xl font-bold mb-4 text-gray-200">
Not ready to apply?
</h3> <p class="text-gray-400 text-sm mb-6">
See exactly how much revenue you're leaking every month
                        due to sub-optimal conversion rates.
</p> <div class="space-y-4"> <div> <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Monthly Traffic</label> <input type="number" id="calc-traffic" placeholder="50,000" class="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-purple text-white placeholder-gray-700 font-mono"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Conv. Rate (%)</label> <input type="number" id="calc-cr" step="0.5" min="0.1" max="20" placeholder="1.2" class="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-purple text-white placeholder-gray-700 font-mono hide-spinners"> </div> <div> <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">AOV ($)</label> <input type="number" id="calc-aov" step="5" min="1" placeholder="85" class="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-brand-purple text-white placeholder-gray-700 font-mono hide-spinners"> </div> </div> </div> <button id="calc-btn" class="mt-6 text-brand-purple hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
Calculate Potential <span aria-hidden="true">&rarr;</span> </button> </div> <!-- Result Side --> <div class="flex-1 w-full bg-black/40 rounded-xl p-6 border border-white/5 text-center min-h-[160px] flex flex-col items-center justify-center"> <div id="calc-result" class="hidden animate-fade-in"> <div class="text-sm text-gray-500 mb-2">
Missed Monthly Revenue
</div> <div class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-white mb-2" id="calc-amount">
$0
</div> <div class="text-xs text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full inline-block">
Conservative 30% Lift
</div> </div> <div id="calc-placeholder" class="text-gray-600 text-sm">
Enter your metrics to see your<br>growth potential.
</div> </div> </div> </div> </div> </section> ${renderScript($$result, "D:/antigravity/outafbox/src/components/blocks/AuditFormBlock.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/antigravity/outafbox/src/components/blocks/AuditFormBlock.astro", void 0);

const $$Astro$c = createAstro();
const $$CreatorFormBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CreatorFormBlock;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="apply" class="py-20 px-6 relative"> <!-- Background Gradient --> <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none"></div> <div class="container mx-auto max-w-4xl"> <div class="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden"> <div class="grid md:grid-cols-2 gap-12"> <div> <h2 class="text-3xl font-display font-black mb-4"> ${data.headline || "Join the Network"} </h2> <p class="text-gray-400 mb-8">
Ready to work with the best? Fill out the form or email
                        us directly at <a href="mailto:creatives@outafbox.com" class="text-brand-pink hover:underline font-bold">creatives@outafbox.com</a>.
</p> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0"> <span class="text-xl">🎬</span> </div> <div> <h4 class="font-bold text-white">
Show Us Your Best
</h4> <p class="text-xs text-gray-500 mt-1">
We care about your Portfolio/UGC examples
                                    more than your follower count.
</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0"> <span class="text-xl">⚡</span> </div> <div> <h4 class="font-bold text-white">
Speed Matters
</h4> <p class="text-xs text-gray-500 mt-1">
Our brands move fast. We prioritize creators
                                    with reliable turnaround times.
</p> </div> </div> </div> </div> <!-- Form --> <form class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Full Name</label> <input type="text" placeholder="Jane Doe" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink outline-none text-white transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Email Address</label> <input type="email" placeholder="jane@example.com" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink outline-none text-white transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Portfolio Link (Google Drive / Website)</label> <input type="url" placeholder="https://" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink outline-none text-white transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Social Handle (IG/TikTok)</label> <input type="text" placeholder="@username" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink outline-none text-white transition-all"> </div> <button class="w-full bg-white text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform mt-2 shadow-lg hover:shadow-white/20">
Submit Application
</button> </form> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/blocks/CreatorFormBlock.astro", void 0);

const $$Astro$b = createAstro();
const $$TeamGridBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TeamGridBlock;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6"> <div class="container mx-auto max-w-6xl"> ${data.headline && renderTemplate`<h2 class="text-3xl md:text-5xl font-display font-black text-center mb-16"> ${data.headline} </h2>`} ${renderComponent($$result, "TeamGrid", $$TeamGrid, {})} </div> </section>`;
}, "D:/antigravity/outafbox/src/components/blocks/TeamGridBlock.astro", void 0);

const $$Astro$a = createAstro();
const $$JobsListBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$JobsListBlock;
  const { data } = Astro2.props;
  const jobs = data.listings || [
    {
      title: "Meta Ads Strategist",
      type: "Full-Time",
      location: "Remote",
      description: "You eat ROAS for breakfast. You understand the full funnel, from creative brief to attribution modeling."
    },
    {
      title: "Senior Graphic Designer",
      type: "Full-Time",
      location: "Remote",
      description: "Turn boring static ads into scroll-stopping visuals. High-velocity output required."
    },
    {
      title: "Full Stack Developer",
      type: "Contract / FT",
      location: "Remote",
      description: "Build high-converting landing pages and custom apps (Next.js, Astro). Performance obsessed."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6"> <div class="container mx-auto max-w-4xl"> ${data.headline && renderTemplate`<h2 class="text-3xl font-display font-bold mb-12 text-center"> ${data.headline} </h2>`} <!-- Job Openings --> <div class="grid md:grid-cols-3 gap-6 mb-20"> ${jobs.map((job) => renderTemplate`<div class="glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-purple/50 transition-colors group"> <div class="flex justify-between items-start mb-4"> <h3 class="text-xl font-bold font-display text-white"> ${job.title} </h3> </div> <p class="text-gray-400 text-sm mb-6 leading-relaxed"> ${job.description} </p> <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500"> <span class="bg-white/5 px-2 py-1 rounded"> ${job.type} </span> <span class="bg-white/5 px-2 py-1 rounded"> ${job.location} </span> </div> </div>`)} </div> <!-- Application Section --> <div class="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-display font-bold mb-4">
Don't see your role?
</h2> <p class="text-gray-400 mb-6">
We're always looking for top tier talent. If you think
                        you can add value to our ecosystem, pitch us.
</p> <div class="space-y-4"> <div class="flex items-center gap-3 text-gray-300"> <!-- Icon --> <svg class="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>Competitive Salary + Performance Bonuses</span> </div> <div class="flex items-center gap-3 text-gray-300"> <!-- Icon --> <svg class="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>100% Remote & Async</span> </div> </div> </div> <form class="space-y-4"> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Name</label> <input type="text" placeholder="John Doe" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-white transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Email</label> <input type="email" placeholder="john@example.com" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-white transition-all"> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Role Applying For</label> <select class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-white transition-all appearance-none cursor-pointer"> <option>General Application</option> <option>Meta Ads Strategist</option> <option>Senior Graphic Designer</option> <option>Full Stack Developer</option> </select> </div> <div> <label class="block text-sm font-medium text-gray-400 mb-1">Link to LinkedIn / Portfolio</label> <input type="url" placeholder="https://" class="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-white transition-all"> </div> <button class="w-full bg-white text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-lg hover:shadow-white/20 mt-2">
Send Application
</button> </form> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/blocks/JobsListBlock.astro", void 0);

const $$Astro$9 = createAstro();
const $$FAQBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$FAQBlock;
  const { data } = Astro2.props;
  const questions = data.questions || [];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-6"> <div class="container mx-auto max-w-3xl"> <h2 class="text-3xl font-bold text-center mb-12">
Frequently Asked Questions
</h2> <div class="space-y-6"> ${questions.map((item) => renderTemplate`<div class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"> <h3 class="text-lg font-bold text-white mb-2"> ${item.question} </h3> <p class="text-gray-400">${item.answer}</p> </div>`)} </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/blocks/FAQBlock.astro", void 0);

const thumb = new Proxy({"src":"/_astro/vsl-thumb.BSFC35yb.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/vsl-thumb.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/vsl-thumb.png");
							return target[name];
						}
					});

const $$Astro$8 = createAstro();
const $$VSL = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$VSL;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 md:py-24 bg-black/40 border-y border-white/5 relative overflow-hidden"> <div class="container mx-auto px-6 max-w-6xl relative z-10"> <div class="grid md:grid-cols-2 gap-12 items-center"> <!-- Content Side --> <div class="order-2 md:order-1"> <div class="flex items-center gap-2 mb-4"> <span class="w-12 h-[1px] bg-brand-purple"></span> <span class="text-brand-purple uppercase tracking-widest text-xs font-bold">The Mechanism</span> </div> <h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight">
It's not Magic.<br>It's <span class="text-white">Engineering</span>.
</h2> <p class="text-gray-400 text-lg leading-relaxed mb-8">
Stop guessing with your ad creative. We use a 4-step "Trojan
                    Horse" framework to systematically validate potential
                    winners and scale them without burning cash.
</p> <div class="flex items-center gap-4"> <div class="flex -space-x-3"> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue border-2 border-black flex items-center justify-center text-xs font-bold text-white">
JK
</div> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple border-2 border-black flex items-center justify-center text-xs font-bold text-white">
SM
</div> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-green border-2 border-black flex items-center justify-center text-xs font-bold text-white">
AR
</div> </div> <div class="text-sm text-gray-400">
Watched by <span class="text-white font-bold">400+</span> Founders
</div> </div> </div> <!-- Video Side (Compact) --> <div class="order-1 md:order-2 relative group cursor-pointer max-w-xl ml-auto"> <!-- Glow --> <div class="absolute inset-0 bg-brand-purple/20 blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"> <img${addAttribute(thumb.src, "src")} alt=" The Mechanism Video" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300"> <div class="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div> </div> </div> </div> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/VSL.astro", void 0);

const $$Astro$7 = createAstro();
const $$VSLBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$VSLBlock;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "VSL", $$VSL, {})}`;
}, "D:/antigravity/outafbox/src/components/blocks/VSLBlock.astro", void 0);

const $$Astro$6 = createAstro();
const $$Comparison = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Comparison;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 relative"> <div class="container mx-auto px-6"> <div class="text-center max-w-3xl mx-auto mb-16"> <h2 class="text-4xl md:text-5xl font-black mb-6">
The Economics of <span class="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Growth</span>.
</h2> <p class="text-gray-400 text-lg">
Why building this in-house is a $400k/year liability.
</p> </div> <div class="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto pt-8"> <!-- Option 1: The Traditional Agency --> <div class="glass-panel p-8 rounded-2xl border-t border-red-500/30 opacity-70 hover:opacity-100 transition-opacity h-full"> <h3 class="text-xl font-bold text-gray-300 mb-2">
Traditional Agency
</h3> <div class="text-3xl font-black text-white mb-6">
$5k-$15k<span class="text-sm font-normal text-gray-500">/mo</span> </div> <ul class="space-y-4 text-gray-400 text-sm"> <li class="flex items-start gap-3"> <span class="text-red-500 text-lg">✕</span> <span>Disconnected services ("Silos")</span> </li> <li class="flex items-start gap-3"> <span class="text-red-500 text-lg">✕</span> <span>Misaligned incentives (Retainer)</span> </li> <li class="flex items-start gap-3"> <span class="text-red-500 text-lg">✕</span> <span>Slow feedback loops</span> </li> <li class="flex items-start gap-3"> <span class="text-red-500 text-lg">✕</span> <span>No skin in the game</span> </li> </ul> </div> <!-- Option 2: The In-House Team (The Anchor) --> <div class="glass-panel p-8 rounded-2xl border-t border-yellow-500/30 opacity-70 hover:opacity-100 transition-opacity relative h-full"> <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500/20 border border-yellow-500/50 px-3 py-1 rounded-full text-xs text-yellow-200 uppercase tracking-widest font-bold backdrop-blur-md">
The Expensive Way
</div> <h3 class="text-xl font-bold text-gray-300 mb-2">
In-House Team
</h3> <div class="text-3xl font-black text-white mb-2">
$410k<span class="text-sm font-normal text-gray-500">/yr</span> </div> <p class="text-xs text-gray-500 mb-6 uppercase tracking-wide">
Payroll + Overhead + Recruiting
</p> <ul class="space-y-4 text-gray-400 text-sm"> <li class="flex items-start gap-3"> <span class="text-yellow-500 text-lg">!</span> <span>Creative Strategist ($120k)</span> </li> <li class="flex items-start gap-3"> <span class="text-yellow-500 text-lg">!</span> <span>Video Editor ($80k)</span> </li> <li class="flex items-start gap-3"> <span class="text-yellow-500 text-lg">!</span> <span>Media Buyer ($100k)</span> </li> <li class="flex items-start gap-3"> <span class="text-yellow-500 text-lg">!</span> <span>Management Headaches</span> </li> </ul> </div> <!-- Option 3: OutAfBox Ecosystem (The Winner) --> <div class="glass-panel p-10 rounded-2xl border border-brand-purple shadow-[0_0_50px_rgba(124,58,237,0.15)] relative h-full bg-brand-purple/5"> <div class="relative z-10"> <div class="absolute -top-14 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-pink px-4 py-1 rounded-full text-xs font-bold text-white tracking-widest shadow-lg whitespace-nowrap">
GROWTH PARTNER
</div> <h3 class="text-2xl font-bold text-white mb-2">OutAfBox</h3> <div class="text-4xl font-black text-white mb-6">
Performance<span class="text-sm font-normal text-gray-400 ml-1">Based</span> </div> <ul class="space-y-5 text-gray-300"> <li class="flex items-start gap-3"> <div class="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
✓
</div> <span><strong>Full "Growth Ecosystem"</strong> (Creative
                                + Media + LP)</span> </li> <li class="flex items-start gap-3"> <div class="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
✓
</div> <span><strong>Risk Reversal:</strong> We work for free
                                if we miss KPIs</span> </li> <li class="flex items-start gap-3"> <div class="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
✓
</div> <span>Zero Management Overhead</span> </li> <li class="flex items-start gap-3"> <div class="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
✓
</div> <span>Asset Ownership (You own the IP)</span> </li> </ul> <div class="mt-8 pt-8 border-t border-white/10 text-center"> <div class="text-sm text-gray-400 mb-2">
Est. Launch Time
</div> <div class="text-xl font-bold text-white">
Less than 14 Days
</div> </div> </div> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/Comparison.astro", void 0);

const $$Astro$5 = createAstro();
const $$ComparisonBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ComparisonBlock;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Comparison", $$Comparison, {})}`;
}, "D:/antigravity/outafbox/src/components/blocks/ComparisonBlock.astro", void 0);

const $$Astro$4 = createAstro();
const $$FounderBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FounderBlock;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Founder", $$Founder, {})}`;
}, "D:/antigravity/outafbox/src/components/blocks/FounderBlock.astro", void 0);

const $$ResultsTeaser = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24"> <div class="container mx-auto px-6"> <div class="glass-panel p-8 md:p-12 rounded-3xl border-l-4 border-l-brand-purple relative overflow-hidden group"> <!-- Background Gradient --> <div class="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div> <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10"> <!-- Data Side --> <div class="order-2 lg:order-1"> <div class="flex items-center gap-4 mb-6"> <span class="bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study</span> <span class="text-gray-400 text-sm font-display font-bold">PET BRAND • E-COMMERCE</span> </div> <h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight">
We scaled them from <span class="text-red-500 line-through decoration-white/50 decoration-2">0.8</span> to <span class="text-brand-purple bg-brand-purple/10 px-2 rounded">3.2 ROAS</span> in 14 days.
</h2> <p class="text-xl text-gray-300 mb-8 leading-relaxed">
They were burning cash on "pretty" ads. We installed our
                        UGC Creative Engine, produced 50 variations, and found
                        the winner that unlocked scale.
</p> <a href="/case-studies" class="inline-flex items-center gap-2 text-white font-bold hover:text-brand-purple transition-colors text-lg group-hover:translate-x-2 duration-300">
Read the full breakdown <span aria-hidden="true">&rarr;</span> </a> </div> <!-- Visual Side --> <div class="order-1 lg:order-2 relative"> <div class="grid grid-cols-2 gap-4"> <div class="bg-black/40 rounded-xl p-6 border border-white/5 backdrop-blur-sm"> <p class="text-gray-500 text-xs uppercase tracking-wider mb-2">
Before
</p> <div class="text-4xl font-mono font-bold text-red-500">
0.8x
</div> <div class="text-xs text-red-400 mt-1">
Losing Money
</div> </div> <div class="bg-brand-purple/20 rounded-xl p-6 border border-brand-purple/50 backdrop-blur-sm relative overflow-hidden"> <div class="absolute inset-0 bg-brand-purple/20 animate-pulse"></div> <p class="text-brand-purple text-xs uppercase tracking-wider mb-2 relative z-10">
After
</p> <div class="text-4xl font-mono font-bold text-white relative z-10">
3.2x
</div> <div class="text-xs text-white/80 mt-1 relative z-10">
Profitable Scale
</div> </div> </div> <!-- Decorative Chart Line --> <div class="absolute top-1/2 left-0 right-0 h-24 -mt-12 pointer-events-none opacity-30"> <svg viewBox="0 0 100 20" class="w-full h-full text-brand-purple" fill="none" stroke="currentColor" stroke-width="0.5"> <path d="M0 15 Q 25 18, 50 10 T 100 2"></path> </svg> </div> </div> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/ResultsTeaser.astro", void 0);

const $$Astro$3 = createAstro();
const $$ResultsTeaserBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ResultsTeaserBlock;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ResultsTeaser", $$ResultsTeaser, {})}`;
}, "D:/antigravity/outafbox/src/components/blocks/ResultsTeaserBlock.astro", void 0);

const $$Astro$2 = createAstro();
const $$Guarantee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Guarantee;
  const { data } = Astro2.props;
  return renderTemplate`${!data ? renderTemplate`${maybeRenderHead()}<div>Data Error</div>` : renderTemplate`<section class="py-20 pb-32"><div class="container mx-auto px-6 max-w-4xl"><div class="glass-panel p-12 rounded-3xl text-center relative overflow-hidden border-2 border-brand-green/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] group hover:border-brand-green/60 transition-colors duration-500"><!-- Glow effect --><div class="absolute inset-0 bg-brand-green/5 blur-xl group-hover:bg-brand-green/10 transition-colors duration-500"></div><div class="relative z-10"><h2 class="text-3xl md:text-5xl font-black mb-6 text-white">${data.guaranteeHeadline}</h2><p class="text-xl text-gray-300 mb-10 leading-relaxed">${data.guaranteeBody}</p><a${addAttribute(data.guaranteeCtaLink || "/audit", "href")} class="inline-block px-10 py-5 bg-brand-green text-black font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.5)]">${data.guaranteeCtaText}</a></div></div></div></section>`}`;
}, "D:/antigravity/outafbox/src/components/landing/Guarantee.astro", void 0);

const $$Astro$1 = createAstro();
const $$GuaranteeBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuaranteeBlock;
  const { data } = Astro2.props;
  const guaranteeData = {
    guaranteeHeadline: data.headline,
    guaranteeBody: data.subhead,
    guaranteeCtaText: data.ctaText || "APPLY FOR PARTNERSHIP",
    guaranteeCtaLink: data.ctaLink || "/audit"
  };
  return renderTemplate`${maybeRenderHead()}<div id="guarantee"> ${renderComponent($$result, "Guarantee", $$Guarantee, { "data": guaranteeData })} </div>`;
}, "D:/antigravity/outafbox/src/components/blocks/GuaranteeBlock.astro", void 0);

const $$Astro = createAstro();
const $$PageBuilder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageBuilder;
  const { blocks } = Astro2.props;
  return renderTemplate`${blocks && blocks.map((block) => {
    switch (block.__typename) {
      case "PageBlocksHero":
        return renderTemplate`${renderComponent($$result, "HeroBlock", $$HeroBlock, { "data": block })}`;
      case "PageBlocksFeatures":
        return renderTemplate`${renderComponent($$result, "FeatureGridBlock", $$FeatureGridBlock, { "data": block })}`;
      case "PageBlocksContent":
        return renderTemplate`${renderComponent($$result, "ContentBlock", $$ContentBlock, { "data": block })}`;
      case "PageBlocksTestimonials":
        return renderTemplate`${renderComponent($$result, "TestimonialsBlock", $$TestimonialsBlock, { "data": block })}`;
      case "PageBlocksTrustBar":
        return renderTemplate`${renderComponent($$result, "TrustBarBlock", $$TrustBarBlock, { "data": block })}`;
      case "PageBlocksAuditForm":
        return renderTemplate`${renderComponent($$result, "AuditFormBlock", $$AuditFormBlock, { "data": block })}`;
      case "PageBlocksCreatorForm":
        return renderTemplate`${renderComponent($$result, "CreatorFormBlock", $$CreatorFormBlock, { "data": block })}`;
      case "PageBlocksTeam":
        return renderTemplate`${renderComponent($$result, "TeamGridBlock", $$TeamGridBlock, { "data": block })}`;
      case "PageBlocksJobs":
        return renderTemplate`${renderComponent($$result, "JobsListBlock", $$JobsListBlock, { "data": block })}`;
      case "PageBlocksFaq":
        return renderTemplate`${renderComponent($$result, "FAQBlock", $$FAQBlock, { "data": block })}`;
      case "PageBlocksVsl":
        return renderTemplate`${renderComponent($$result, "VSLBlock", $$VSLBlock, { "data": block })}`;
      case "PageBlocksComparison":
        return renderTemplate`${renderComponent($$result, "ComparisonBlock", $$ComparisonBlock, { "data": block })}`;
      case "PageBlocksFounder":
        return renderTemplate`${renderComponent($$result, "FounderBlock", $$FounderBlock, { "data": block })}`;
      case "PageBlocksResultsTeaser":
        return renderTemplate`${renderComponent($$result, "ResultsTeaserBlock", $$ResultsTeaserBlock, { "data": block })}`;
      case "PageBlocksGuarantee":
        return renderTemplate`${renderComponent($$result, "GuaranteeBlock", $$GuaranteeBlock, { "data": block })}`;
      default:
        return renderTemplate`${maybeRenderHead()}<div class="bg-red-500 text-white p-4">
Unknown Block: ${block.__typename}</div>`;
    }
  })}`;
}, "D:/antigravity/outafbox/src/components/PageBuilder.astro", void 0);

function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  blocks {
    __typename
    ... on PageBlocksHero {
      headline
      subhead
      ctaText
      ctaLink
      secondaryCtaText
      secondaryCtaLink
      image
    }
    ... on PageBlocksFeatures {
      headline
      id
      items {
        __typename
        title
        description
        icon
      }
    }
    ... on PageBlocksContent {
      body
      centered
    }
    ... on PageBlocksTestimonials {
      headline
    }
    ... on PageBlocksTrustBar {
      label
    }
    ... on PageBlocksAuditForm {
      headline
    }
    ... on PageBlocksCreatorForm {
      headline
    }
    ... on PageBlocksTeam {
      headline
    }
    ... on PageBlocksJobs {
      headline
      listings {
        __typename
        title
        type
        location
        description
      }
    }
    ... on PageBlocksFaq {
      questions {
        __typename
        question
        answer
      }
    }
    ... on PageBlocksVsl {
      headline
    }
    ... on PageBlocksComparison {
      headline
    }
    ... on PageBlocksFounder {
      headline
    }
    ... on PageBlocksResultsTeaser {
      headline
    }
    ... on PageBlocksGuarantee {
      headline
      subhead
      ctaText
      ctaLink
    }
  }
}
    `;
const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
function getSdk(requester) {
  return {
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ cacheDir: "D:/antigravity/outafbox/tina/__generated__/.cache/1769539409879", url: "http://localhost:4001/graphql", token: "null", queries });

export { $$PageBuilder as $, client as c };
