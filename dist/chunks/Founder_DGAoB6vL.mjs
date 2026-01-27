import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_mNGvJEK9.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_UhcFx4MB.mjs';

const founder = new Proxy({"src":"/_astro/founder.BzH0KXpD.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/founder.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/founder.png");
							return target[name];
						}
					});

const strategist = new Proxy({"src":"/_astro/strategist-pro.D3SROlKX.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/strategist-pro.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/strategist-pro.png");
							return target[name];
						}
					});

const cto = new Proxy({"src":"/_astro/cto-pro.CE8FJZv7.png","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/antigravity/outafbox/src/assets/cto-pro.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/antigravity/outafbox/src/assets/cto-pro.png");
							return target[name];
						}
					});

const $$TeamGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-3 gap-8"> <!-- Member 1: Strategist --> <div class="group"> <div class="relative overflow-hidden rounded-2xl border border-white/10 mb-4 aspect-[4/5]"> <div class="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors z-10"></div> ${renderComponent($$result, "Image", $$Image, { "src": strategist, "alt": "Lead Strategist", "class": "object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" })} </div> <div> <div class="text-xl font-bold text-white">The Strategist</div> <div class="text-sm text-brand-blue font-mono tracking-widest uppercase">
Growth Architect
</div> </div> </div> <!-- Member 2: Owner (Center) --> <div class="group md:-translate-y-8"> <div class="relative overflow-hidden rounded-2xl border border-brand-purple/50 shadow-[0_0_30px_rgba(124,58,237,0.2)] mb-4 aspect-[4/5] z-10"> <div class="absolute inset-0 bg-brand-purple/10 group-hover:bg-transparent transition-colors z-10"></div> ${renderComponent($$result, "Image", $$Image, { "src": founder, "alt": "Founder", "class": "object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" })} <div class="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-bold border border-white/20">
FOUNDER
</div> </div> <div> <div class="text-xl font-bold text-white">Alex V.</div> <div class="text-sm text-brand-purple font-mono tracking-widest uppercase">
The Operator
</div> </div> </div> <!-- Member 3: CTO --> <div class="group"> <div class="relative overflow-hidden rounded-2xl border border-white/10 mb-4 aspect-[4/5]"> <div class="absolute inset-0 bg-brand-pink/10 group-hover:bg-transparent transition-colors z-10"></div> ${renderComponent($$result, "Image", $$Image, { "src": cto, "alt": "CTO", "class": "object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" })} </div> <div> <div class="text-xl font-bold text-white">The Engineer</div> <div class="text-sm text-brand-pink font-mono tracking-widest uppercase">
Head of Tech
</div> </div> </div> </div>`;
}, "D:/antigravity/outafbox/src/components/about/TeamGrid.astro", void 0);

const $$Astro = createAstro();
const $$Founder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Founder;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 border-t border-white/5 bg-black/30"> <div class="container mx-auto px-6 max-w-5xl"> <div class="grid md:grid-cols-[300px_1fr] gap-12 items-center"> <!-- Image --> <div class="relative group"> <div class="absolute inset-0 bg-brand-purple/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500"></div> ${renderComponent($$result, "Image", $$Image, { "src": founder, "alt": "Founder", "class": "relative rounded-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10" })} <div class="absolute -bottom-4 -right-4 bg-white text-black px-4 py-2 font-bold font-display uppercase tracking-widest text-sm transform -rotate-2">
Founder
</div> </div> <!-- Content --> <div class="space-y-6"> <h2 class="text-3xl md:text-5xl font-black">
"Stop renting your growth."
</h2> <div class="h-1 w-20 bg-brand-purple"></div> <p class="text-lg text-gray-300 leading-relaxed font-light">
Agencies love the "Confusion Monopoly". They hide behind
                    confusing dashboards and jargon so you keep paying the
                    retainer.
<br><br>
We built OutAfBox to kill the retainer model. We are a small,
                    elite strike team that builds the infrastructure you own.
</p> <div class="pt-4"> <div class="text-xl font-bold font-display">Alex V.</div> <div class="text-sm text-gray-500 uppercase tracking-widest">
Growth Architect @ OutAfBox
</div> </div> </div> </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/Founder.astro", void 0);

export { $$Founder as $, $$TeamGrid as a };
