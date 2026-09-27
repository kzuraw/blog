import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const projectDir = resolve(import.meta.dirname, "..");
const diagramsDir = join(projectDir, "src/assets/diagrams");

function findDiagrams(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findDiagrams(path);
    return entry.isFile() && entry.name.endsWith(".d2") ? [path] : [];
  });
}

const diagrams = findDiagrams(diagramsDir).sort();

for (const source of diagrams) {
  const output = source.replace(/\.d2$/, ".svg");
  const result = spawnSync("d2", [source, output], {
    cwd: projectDir,
    stdio: "inherit",
  });

  if (result.error) {
    console.error(
      "Could not run D2. Install it with `brew install d2` on macOS, " +
        "or follow https://d2lang.com/tour/install/ and ensure d2 is on PATH.",
    );
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`Failed to render ${relative(projectDir, source)}.`);
    process.exit(result.status ?? 1);
  }
}

console.log(`Rendered ${diagrams.length} diagram(s).`);
