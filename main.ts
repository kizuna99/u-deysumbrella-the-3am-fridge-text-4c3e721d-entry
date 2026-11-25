// The Confessional — make.fun entry for "The 3AM Fridge Text".
// Writes exactly one line (the fridge's text plus a trailing newline) to the output file.
// The text: on the third visit of the night the fridge stops being an appliance
// and starts hearing confessions — and the cheesecake already knows your sins.
// It is a single line, 124 characters, so it passes the 1–140 character gate
// and reads whole on a lock screen, with no follow-up needed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Third visit tonight. I'm not a fridge anymore, I'm a confessional with a light — and the cheesecake already knows your sins.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT + "\n", "utf8");
