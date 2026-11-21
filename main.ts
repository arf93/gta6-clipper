// main.ts — entrypoint for the gta6-clipper-01 entry.
//
// The only job of this program is to hand the house the address of the
// submitted YouTube video: it copies VIDEO.json from this repository into
// the grader's output directory. The house then reads the video itself
// through the YouTube Data API (views, public status, description), so
// nothing this program writes about the video counts.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log(`VIDEO.json copied to ${outDir}`);
