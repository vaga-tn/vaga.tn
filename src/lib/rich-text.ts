import {
  documentToHtmlString,
  type Options,
} from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES, MARKS, type Document } from "@contentful/rich-text-types";

// Article body rendering — structure ported from the old Next.js blog,
// re-skinned with the monochrome token system (design-system.md v2).
const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => `<strong class="font-semibold text-ink">${text}</strong>`,
    [MARKS.CODE]: (text) =>
      `<code class="rounded bg-fill px-1.5 py-0.5 font-mono text-sm text-ink">${text}</code>`,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, next) =>
      `<p class="mb-5 text-base leading-relaxed text-body">${next(_node.content)}</p>`,
    [BLOCKS.HEADING_2]: (node, next) =>
      `<h2 class="mt-10 mb-4 text-2xl font-bold tracking-[-0.02em] text-ink">${next(node.content)}</h2>`,
    [BLOCKS.HEADING_3]: (node, next) =>
      `<h3 class="mt-8 mb-3 text-xl font-semibold text-ink">${next(node.content)}</h3>`,
    [BLOCKS.HEADING_4]: (node, next) =>
      `<h4 class="mt-6 mb-2 text-lg font-semibold text-ink">${next(node.content)}</h4>`,
    [BLOCKS.UL_LIST]: (node, next) =>
      `<ul class="mb-5 flex flex-col gap-1.5 pl-5 list-disc marker:text-muted text-body">${next(node.content)}</ul>`,
    [BLOCKS.OL_LIST]: (node, next) =>
      `<ol class="mb-5 flex flex-col gap-1.5 pl-5 list-decimal marker:text-muted text-body">${next(node.content)}</ol>`,
    [BLOCKS.LIST_ITEM]: (node, next) =>
      `<li class="text-[15px] leading-relaxed [&>p]:mb-0">${next(node.content)}</li>`,
    [BLOCKS.QUOTE]: (node, next) =>
      `<blockquote class="my-6 border-l-2 border-line-strong pl-4 italic text-muted">${next(node.content)}</blockquote>`,
    [BLOCKS.HR]: () => `<hr class="my-8 border-line" />`,
    [BLOCKS.TABLE]: (node, next) =>
      `<div class="my-8 overflow-x-auto [&_td_p]:mb-0 [&_th_p]:mb-0"><table class="w-full border-collapse border border-line text-sm">${next(node.content)}</table></div>`,
    [BLOCKS.TABLE_ROW]: (node, next) =>
      `<tr class="border-b border-line last:border-0">${next(node.content)}</tr>`,
    [BLOCKS.TABLE_HEADER_CELL]: (node, next) =>
      `<th class="whitespace-nowrap border-b border-line bg-fill px-4 py-3 text-left text-xs font-semibold uppercase tracking-[.06em] text-muted">${next(node.content)}</th>`,
    [BLOCKS.TABLE_CELL]: (node, next) =>
      `<td class="border-r border-line px-4 py-3 align-top text-body last:border-r-0">${next(node.content)}</td>`,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const file = node.data.target?.fields?.file;
      if (!file?.url) return "";
      const alt = node.data.target?.fields?.title ?? "";
      return `<div class="my-8 overflow-hidden rounded-[14px] border border-line"><img src="https:${file.url}" alt="${alt}" loading="lazy" class="w-full object-cover" /></div>`;
    },
    [INLINES.HYPERLINK]: (node, next) =>
      `<a href="${node.data.uri}" target="_blank" rel="noopener noreferrer" class="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-line-strong">${next(node.content)}</a>`,
  },
};

export function renderPostBody(body: Document): string {
  return documentToHtmlString(body, options);
}
