import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_mNGvJEK9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAkkF9SP.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-36 pb-12 px-6"> <div class="max-w-3xl mx-auto text-gray-300"> <h1 class="text-4xl font-display font-bold text-white mb-8">
Terms of Service
</h1> <p class="mb-4">Last Updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> <div class="space-y-6"> <section> <h2 class="text-xl font-bold text-white mb-2">
1. Agreement to Terms
</h2> <p>
By accessing our website, you agree to be bound by these
                        Terms of Service and to comply with all applicable laws
                        and regulations.
</p> </section> <section> <h2 class="text-xl font-bold text-white mb-2">
2. Use License
</h2> <p>
Permission is granted to temporarily download one copy
                        of the materials (information or software) on OutAfBox's
                        website for personal, non-commercial transitory viewing
                        only.
</p> </section> <section> <h2 class="text-xl font-bold text-white mb-2">
3. Disclaimer
</h2> <p>
The materials on OutAfBox's website are provided on an
                        'as is' basis. OutAfBox makes no warranties, expressed
                        or implied, and hereby disclaims and negates all other
                        warranties including, without limitation, implied
                        warranties or conditions of merchantability, fitness for
                        a particular purpose, or non-infringement of
                        intellectual property or other violation of rights.
</p> </section> </div> </div> </main> ` })}`;
}, "D:/antigravity/outafbox/src/pages/terms.astro", void 0);

const $$file = "D:/antigravity/outafbox/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
