import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const { render } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);

// Home + one folder per service page (see vite.config.ts inputs)
const pages = ["", "pgr-pcmso-sao-paulo", "nr-01-riscos-psicossociais", "gestao-sst-esocial"];
const marker = /<div id="root"( data-page="[^"]*")?><\/div>/;

for (const page of pages) {
  const file = `${root}dist/${page ? `${page}/` : ""}index.html`;
  const html = await readFile(file, "utf8");
  if (!marker.test(html)) throw new Error(`root marker not found in ${file}`);
  await writeFile(file, html.replace(marker, (m, attr = "") => `<div id="root"${attr}>${render(page || undefined)}</div>`));
  console.log(`prerendered ${file.replace(root, "")}`);
}
await rm(`${root}dist-ssr`, { recursive: true, force: true });
