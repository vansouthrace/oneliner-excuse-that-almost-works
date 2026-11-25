// The Excuse That Almost Works: one believable line to the boss, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse line, composed fresh for this bounty.
const entry = "Boss, a pipe burst and flooded my home office. Plumber can only come today, I am so sorry.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
