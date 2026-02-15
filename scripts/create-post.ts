import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createInterface } from "node:readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const title = await rl.question("Post title: ");
rl.close();

if (!title.trim()) {
  console.error("Title cannot be empty");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const projectDir = resolve(import.meta.dirname, "..");

const now = new TZDate(new Date(), "Europe/Warsaw");
const date = format(now, "yyyy-MM-dd");
const year = format(now, "yyyy");

const filePath = resolve(projectDir, `src/content/blog/${date}-${slug}.md`);

const content = `---
title: ${title}
description:
pubDate: ${format(now, "yyyy-MM-dd'T'HH:mm:ssXXX")}
slug: ${year}/${slug}
---
`;

writeFileSync(filePath, content);
execSync(`code ${filePath}`);
console.log("Blog post created");
