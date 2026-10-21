import { cpSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const slug = (process.argv[2] ?? '').trim().toLowerCase();
const model = process.argv[3] ?? slug.toUpperCase();

if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new-boat -- hs-30');
  process.exit(1);
}

const dest = join(root, 'src/content/boats', slug);
if (existsSync(dest)) {
  console.error(`Already exists: src/content/boats/${slug}/`);
  process.exit(1);
}

cpSync(join(root, 'src/content/_boat-template'), dest, { recursive: true });
writeFileSync(
  join(dest, 'index.md'),
  `---
model: "${model}"
cover: "./cover.png"
dummy: true
featured: false
owner: ""
year: ""
engine: ""
location: ""
note: ""
---
`,
);

console.log(`Created src/content/boats/${slug}/`);
console.log('Replace cover.png, drop extras in photos/, edit index.md.');
