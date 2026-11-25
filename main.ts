import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Sorry boss, boiler burst overnight, plumber can't come till noon, house is ankle-deep, I'll be in after lunch";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
