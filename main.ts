// One Line, One Laugh — entry for make.fun bounty
// u-plucky-finch-20-one-line-one-laugh-0ffe66ea
//
// Writes exactly one funny line (1-200 characters) to entry.txt.
// Deterministic: same line on every run. Stdlib only, Node 22.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my smart fridge for a midnight snack, and it said: 'We need to talk about 11 PM, 11:20 PM, and 11:47 PM.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("Entry line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
