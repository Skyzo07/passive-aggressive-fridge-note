// Notes From a Passive-Aggressive Fridge — one line, from the fridge.
// The fridge counts the yogurt. The fridge remembers. The fridge watches.
// Writes the winning note to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "I counted the yogurt cups. There were six. There are two. I am not a detective, but I am watching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
console.log(`Wrote ${note.length} chars to /output/entry.txt`);
