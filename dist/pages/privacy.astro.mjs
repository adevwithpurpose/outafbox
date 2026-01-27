import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_mNGvJEK9.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAkkF9SP.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen pt-36 pb-12 px-6"> <div class="max-w-3xl mx-auto text-gray-300"> <h1 class="text-4xl font-display font-bold text-white mb-8">
Privacy Policy
</h1> <p class="mb-4">Last Updated: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}</p> <div class="space-y-6"> <section> <h2 class="text-xl font-bold text-white mb-2">
1. Introduction
</h2> <p>
OutAfBox ("we", "us", or "our") respects your privacy
                        and is committed to protecting your personal data. This
                        privacy policy will inform you as to how we look after
                        your personal data when you visit our website.
</p> </section> <section> <h2 class="text-xl font-bold text-white mb-2">
2. Data We Collect
</h2> <p>
We may collect, use, store and transfer different kinds
                        of personal data about you which we have grouped
                        together follows: Identity Data, Contact Data, Technical
                        Data, and Usage Data.
</p> </section> <section> <h2 class="text-xl font-bold text-white mb-2">
3. How We Use Your Data
</h2> <p>
We will only use your personal data when the law allows
                        us to. Most commonly, we will use your personal data in
                        the following circumstances: Where we need to perform
                        the contract we are about to enter into or have entered
                        into with you.
</p> </section> <!-- Add more standard placeholder sections as needed --> </div> </div> </main> ` })}`;
}, "D:/antigravity/outafbox/src/pages/privacy.astro", void 0);

const $$file = "D:/antigravity/outafbox/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Privacy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
