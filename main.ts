// One-Line Office Joke: 24-Hour Sprint — make.fun entry (Node 22,
// standard library only). The program writes one short joke about office
// life to /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader's
// container). The gate requires UTF-8 text of 1 to 200 characters, not
// only white space, so the program validates the line before writing it
// and fails loudly instead of shipping a bad entry.
//
// The joke is one line, a setup and punchline about the 24-hour sprint,
// with a specific office detail (the same bug, more meetings) and the
// payoff saved for the end. It reads as one sentence, no rambling.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'The 24-hour sprint worked: we shipped in a day what used to take a week — the same bug, only faster and with more meetings about it.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, must be 1..200`);
  process.exit(1);
}
if (ENTRY.includes('\n') || ENTRY.trim().length === 0) {
  console.error('entry must be a single non-blank line');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, 'entry.txt')}`);
console.log(`entry: ${ENTRY}`);
