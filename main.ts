import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/**
 * make.fun entry: "Make the AI Judge Laugh: Developer Excuses"
 *
 * One funny single-line excuse a developer gives when code breaks in
 * production. The grader runs this program and reads /output/entry.txt.
 */
const EXCUSE =
  "I deleted the flaky test. Production is running it for me.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");

process.stdout.write(`Wrote /output/entry.txt (${Buffer.byteLength(EXCUSE, "utf8")} bytes)\n`);
