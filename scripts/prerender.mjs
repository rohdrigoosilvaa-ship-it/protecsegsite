import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const { render, pages } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);
const template = await readFile(`${root}dist/index.html`, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error("root marker not found in dist/index.html");

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const canonical = template.match(/<link\s+rel="canonical"\s+href="([^"]*)"/)?.[1] ?? "";
const origin = canonical.replace(/\/+$/, "");

for (const page of pages) {
  let html = page.shell
    ? template
    : template.replace(marker, `<div id="root" data-prerendered-path="${page.path}">${render(page.path)}</div>`);
  if (page.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`);
    html = html.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeAttr(page.title)}$2`);
  }
  if (page.description) {
    html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
    html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escapeAttr(page.description)}$2`);
  }
  if (page.path !== "/" && origin) {
    html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${origin}${page.path}$2`);
  }
  if (page.jsonLd) {
    const json = JSON.stringify(page.jsonLd(origin)).replace(/</g, "\\u003c");
    html = html.replace("</head>", `    <script type="application/ld+json">${json}</script>\n  </head>`);
  }
  const dir = page.path === "/" ? `${root}dist` : `${root}dist${page.path}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}/index.html`, html);
  console.log(`prerendered ${page.path}`);
}

await rm(`${root}dist-ssr`, { recursive: true, force: true });
