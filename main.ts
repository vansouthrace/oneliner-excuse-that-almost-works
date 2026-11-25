import { mkdirSync, writeFileSync } from "node:fs";

// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// It has to read like something a real person sends in a hurry.
// Keep it under 20 words: a tired manager believes short texts first.
const entry =
  "Power outage took out my whole street, electrician says it won't be back until tonight. Sorry boss.";

// A real text has no trailing newline drama; keep the line exactly as typed.
const clean = entry.trim();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clean);
console.log("entry written:", clean);
