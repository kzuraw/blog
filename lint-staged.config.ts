import { type Configuration } from "lint-staged";

const config: Configuration = {
  "*.{ts,tsx,js,jsx,astro,mjs,cjs}": () => "pnpm knip",
  "*": "prettier --ignore-unknown --write",
  "package.json": "sort-package-json",
};

export default config;
