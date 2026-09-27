import { type Config } from "prettier";

const config: Config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "renovate.jsonc",
      options: {
        trailingComma: "none",
      },
    },
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
