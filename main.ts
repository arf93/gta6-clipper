// main.ts — entrypoint for the gta6-clipper-01 entry.
//
// The only job of this program is to hand the house the address of the
// submitted YouTube video: it copies VIDEO.json from this repository into
// the grader's output directory. The house then reads the video itself
// through the YouTube Data API (views, public status, description), so
// nothing this program writes about the video counts.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Never trust the working directory or the environment: the grader runs
// `node /bot/main.ts` from a cwd that is not the repository, so VIDEO.json
// is located from this file itself — main.ts always sits at the repo root.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log(`VIDEO.json copied to ${outDir}`);
