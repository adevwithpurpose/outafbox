import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_mNGvJEK9.mjs';
import 'piccolore';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/Layout_DAkkF9SP.mjs';
import { c as client, $ as $$PageBuilder } from '../chunks/client_BbGgdG1P.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await client.queries.page({ relativePath: "home.md" });
  const { data } = response;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen overflow-hidden"> ${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": data.page.blocks })} </main> ` })}`;
}, "D:/antigravity/outafbox/src/pages/index.astro", void 0);

const $$file = "D:/antigravity/outafbox/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
