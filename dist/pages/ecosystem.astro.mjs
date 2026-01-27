import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro } from '../chunks/astro/server_mNGvJEK9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAkkF9SP.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_UhcFx4MB.mjs';
export { renderers } from '../renderers.mjs';

const creativeImg = new Proxy({"src":"/_astro/creative-engine.DcTgN533.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/creative-engine.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/creative-engine.png");
							return target[name];
						}
					});

const mediaImg = new Proxy({"src":"/_astro/media-science.C_JvK-1_.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/media-science.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/media-science.png");
							return target[name];
						}
					});

const conversionImg = new Proxy({"src":"/_astro/conversion-portal.CoxTLGxZ.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/conversion-portal.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/conversion-portal.png");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-command.D7EFwreD.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/dashboard-command.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/dashboard-command.png");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$DashboardFeature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardFeature;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 relative overflow-hidden border-y border-white/5"> <!-- Background --> <div class="absolute inset-0 bg-gradient-to-b from-black via-brand-purple/5 to-black"></div> <div class="container mx-auto px-6 relative z-10"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <!-- Content Side --> <div class="order-2 lg:order-1"> <div class="flex items-center gap-2 mb-4"> <span class="w-12 h-[1px] bg-brand-gold"></span> <span class="text-brand-gold uppercase tracking-widest text-xs font-bold">Bonus Feature</span> </div> <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight">
Your Own <span class="text-brand-gold">Command Center</span>.
</h2> <p class="text-xl text-gray-300 mb-6 leading-relaxed">
Meta and Google show you what they <em>want</em> you to see. We
                    show you the truth.
</p> <p class="text-gray-400 mb-8 leading-relaxed">
Every OutAfBox client gets access to our proprietary <strong class="text-white">Marketing Command Center</strong> — a professionally built performance dashboard that reveals:
</p> <ul class="space-y-4 mb-8"> <li class="flex items-start gap-3"> <div class="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mt-1 flex-shrink-0"> <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <div class="text-white font-bold mb-1">
Real Attribution
</div> <div class="text-gray-400 text-sm">
No inflated platform numbers. See your <em>actual</em> blended CPA and true ROAS across all channels.
</div> </div> </li> <li class="flex items-start gap-3"> <div class="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mt-1 flex-shrink-0"> <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <div class="text-white font-bold mb-1">
Campaign-Level Forensics
</div> <div class="text-gray-400 text-sm">
Drill down into every ad set, creative
                                variation, and audience segment. Know exactly
                                what's working and what's bleeding cash.
</div> </div> </li> <li class="flex items-start gap-3"> <div class="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center mt-1 flex-shrink-0"> <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <div> <div class="text-white font-bold mb-1">
Live Revenue Tracking
</div> <div class="text-gray-400 text-sm">
See today's revenue in real-time. Monitor trends
                                by hour, day, or month. Make decisions based on
                                what's happening <em>now</em>, not last week's
                                report.
</div> </div> </li> </ul> <div class="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-6"> <div class="flex items-start gap-3"> <div class="text-3xl">💡</div> <div> <div class="text-white font-bold mb-2">
No More "Trust Me" Reporting
</div> <div class="text-gray-300 text-sm">
Most agencies send you a PDF once a month and
                                hope you don't ask questions. We give you 24/7
                                access to the raw data. Full transparency, zero
                                gatekeeping.
</div> </div> </div> </div> </div> <!-- Dashboard Visual --> <div class="order-1 lg:order-2 relative group"> <div class="absolute inset-0 bg-brand-gold/20 blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"> <div class="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/50 px-3 py-1.5 rounded-full flex items-center gap-2 z-10"> <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> <span class="text-green-400 text-xs font-bold uppercase tracking-wider">Live Data</span> </div> ${renderComponent($$result, "Image", $$Image, { "src": dashboard, "alt": "OutAfBox Marketing Command Center Dashboard", "class": "w-full h-auto object-cover" })} </div> <!-- Floating Metric Badge --> <div class="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl border border-brand-gold/30 shadow-2xl hidden md:block"> <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">
Global ROAS
</div> <div class="text-3xl font-black text-brand-gold">3.2x</div> </div> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/DashboardFeature.astro", void 0);

const $$Ecosystem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-36 pb-12 px-6"> <div class="max-w-5xl mx-auto"> <div class="text-center mb-20"> <h1 class="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
The Growth <span class="text-gradient-main">Ecosystem</span> </h1> <p class="text-xl text-gray-400 max-w-2xl mx-auto">
We don't solve problems in isolation. We install a
                    three-part infrastructure that turns traffic into profit.
</p> </div> <!-- Component 1: Creative --> <div id="creative-engine" class="mb-24 flex flex-col md:flex-row gap-12 items-center scroll-mt-24"> <div class="flex-1"> <div class="text-brand-pink font-bold tracking-widest uppercase mb-2">
01. The Fuel
</div> <h2 class="text-4xl font-display font-bold mb-6">
High-Volume Creative Engine
</h2> <p class="text-gray-300 mb-6 text-lg">
"Creative Fatigue" is the silent killer of ROAS. If you
                        run the same 3 ads for 90 days, your costs <em>will</em> spike.
</p> <p class="text-gray-400 mb-6">
Our specialized UGC studio produces 50+ unique hook
                        variations every single month. We don't guess what
                        works; we test at scale. We treat creative as a data
                        problem, not an art project.
</p> <ul class="space-y-3 mb-8"> <li class="flex items-center gap-3 text-gray-300"> <svg class="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
Direct Response UGC
</li> <li class="flex items-center gap-3 text-gray-300"> <svg class="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
Rapid Iteration Cycles
</li> </ul> </div> <div class="flex-1 w-full relative group"> <div class="absolute inset-0 bg-brand-pink/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": creativeImg, "alt": "Content Factory Pipeline", "class": "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" })} </div> </div> </div> <!-- Component 2: Media --> <div id="media-buying" class="mb-24 flex flex-col md:flex-row-reverse gap-12 items-center scroll-mt-24"> <div class="flex-1"> <div class="text-brand-purple font-bold tracking-widest uppercase mb-2">
02. The Engine
</div> <h2 class="text-4xl font-display font-bold mb-6">
Scientific Media Buying
</h2> <p class="text-gray-300 mb-6 text-lg">
Stop gambling on a "unicorn media buyer". We use a
                        rule-based algorithmic approach to scaling.
</p> <p class="text-gray-400 mb-6">
Our bidding strategies are designed to protect downside
                        while uncapping upside. We don't scale "hope"; we scale
                        proven winners based on strict CPA and ROAS targets.
</p> </div> <div class="flex-1 w-full relative group"> <div class="absolute inset-0 bg-brand-purple/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": mediaImg, "alt": "Algorithmic Media Buying", "class": "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" })} </div> </div> </div> <!-- Component 3: CRO --> <div id="conversion" class="mb-24 flex flex-col md:flex-row gap-12 items-center scroll-mt-24"> <div class="flex-1"> <div class="text-brand-blue font-bold tracking-widest uppercase mb-2">
03. The Capture
</div> <h2 class="text-4xl font-display font-bold mb-6">
Conversion Infrastructure
</h2> <p class="text-gray-300 mb-6 text-lg">
Traffic is useless if it leaks. We build the
                        destination.
</p> <p class="text-gray-400 mb-6">
We design and code high-velocity landing pages (like
                        this one) that are engineered to guide the user from
                        "curiosity" to "committed". No distractions, just
                        conversion.
</p> </div> <div class="flex-1 w-full relative group"> <div class="absolute inset-0 bg-brand-blue/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div> <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": conversionImg, "alt": "Conversion Portal", "class": "w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" })} </div> </div> </div> </div> <!-- Component 4: Dashboard --> ${renderComponent($$result2, "DashboardFeature", $$DashboardFeature, {})} <!-- Final CTA --> <div class="max-w-5xl mx-auto px-6 py-24"> <div class="text-center bg-white/5 border border-white/10 rounded-3xl p-12"> <h2 class="text-3xl font-display font-bold mb-6">
The System Works.
</h2> <a href="/audit" class="inline-block bg-brand-purple hover:bg-brand-purple/90 text-white font-bold px-8 py-4 rounded-lg transition-transform hover:scale-105 glow-purple">
Install This Ecosystem
</a> </div> </div> </main> ` })}`;
}, "D:/antigravity/outafbox/src/pages/ecosystem.astro", void 0);

const $$file = "D:/antigravity/outafbox/src/pages/ecosystem.astro";
const $$url = "/ecosystem";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Ecosystem,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
