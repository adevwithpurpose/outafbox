import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_mNGvJEK9.mjs';
import 'piccolore';
import { c as client, $ as $$PageBuilder } from '../chunks/client_BbGgdG1P.mjs';
import { $ as $$Layout } from '../chunks/Layout_DAkkF9SP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const pages = await client.queries.pageConnection();
  return pages.data.pageConnection.edges.map((edge) => {
    return {
      params: { slug: edge.node._sys.filename }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const response = await client.queries.page({ relativePath: `${slug}.md` });
  const { data } = response;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.page.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen"> ${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": data.page.blocks })} </main> ` })}`;
}, "D:/antigravity/outafbox/src/pages/[...slug].astro", void 0);

const $$file = "D:/antigravity/outafbox/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
