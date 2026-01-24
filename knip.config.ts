import { type KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-lintignore"],
  ignoreDependencies: ["sharp"], // used by astro
};

export default config;
