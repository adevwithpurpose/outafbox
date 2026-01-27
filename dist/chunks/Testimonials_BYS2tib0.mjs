import { c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_mNGvJEK9.mjs';
import 'piccolore';
import 'clsx';

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "We were stuck at $50k/mo for a year. The ecosystem approach unlocked our creative bottleneck. We hit $150k/mo in 90 days.",
      author: "Sarah J.",
      role: "Founder, PetWellness",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4"
    },
    {
      quote: "I was skeptical about the 'Anti-Agency' claim, but they really do work differently. They treat my budget like their own.",
      author: "Mike T.",
      role: "CMO, TechFlow",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike&backgroundColor=c0aede"
    },
    {
      quote: "The only partner that actually understands unit economics. No vanity metrics, just profit validation.",
      author: "Elena R.",
      role: "CEO, LuxSkin",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=ffdfbf"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 relative overflow-hidden"> <div class="container mx-auto px-6 relative z-10"> <div class="text-center mb-12"> <h2 class="text-3xl font-black mb-4">
Founder <span class="text-gray-500">Notes</span> </h2> </div> <div class="grid md:grid-cols-3 gap-6 lg:gap-8 items-start"> ${testimonials.map((t, index) => renderTemplate`<div${addAttribute(`glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors relative group h-full ${index === 1 ? "md:mt-12" : ""}`, "class")}> <!-- Glow background on hover --> <div class="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div> <div class="absolute top-6 right-8 text-6xl text-brand-purple/20 font-serif leading-none opacity-50 font-black">
"
</div> <p class="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed font-medium"> ${t.quote} </p> <div class="flex items-center gap-4 relative z-10 pt-4 border-t border-white/5"> <div class="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10"> <img${addAttribute(t.image, "src")}${addAttribute(t.author, "alt")} class="w-full h-full object-cover"> </div> <div> <div class="text-white font-bold text-base"> ${t.author} </div> <div class="text-brand-purple text-xs font-bold tracking-wide uppercase"> ${t.role} </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "D:/antigravity/outafbox/src/components/landing/Testimonials.astro", void 0);

export { $$Testimonials as $ };
