import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// A 100-word monologue for a fantasy villain who is secretly just very tired.
// The tiredness lives in the pauses, the counting, the ledgers and the small
// deflections — it is never announced outright.
const MONOLOGUE =
  "Come closer. No — not that close; I have already counted the candles twice. " +
  "You want the city drowned by dawn, hero. " +
  "I want the tide to do its work while I sit here with the ledgers. " +
  "Three centuries of floods, and still the clerks send the tide tables in triplicate. " +
  "My phylactery hums in the next room, a small patient sound. " +
  "Kill me if you must. " +
  "The gate will open anyway; the sea is punctual, unlike my generals. " +
  "Only leave the lamp burning. " +
  "The dark gets in through the cracks now, and I am too old to chase it out.";

function validate(text: string): void {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length > 600) throw new Error("entry exceeds the 600-character gate");
  if (words.length < 80 || words.length > 120) {
    throw new Error(`entry should stay near 100 words, got ${words.length}`);
  }
}

function main(): void {
  validate(MONOLOGUE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
}

main();
