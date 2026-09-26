# Blog

This repository contains code & posts for my [blog](https://kzuraw.com).

## How to run

Install dependencies:

```shell
pnpm install
```

Run development server:

```shell
pnpm dev
```

Run production build:

```shell
pnpm build
```

Generate an empty post with required frontmatter:

```shell
pnpm create-post
```

## Credit

This blog is generated using [Astro Build](https://astro.build/).

The theme uses Tailwind CSS. Typography is self-hosted through Fontsource: [Nebula Sans](https://fontsource.org/fonts/nebula-sans)
via `@fontsource/nebula-sans` for text and headings, and Source Code Pro via
`@fontsource/source-code-pro` for code and dates. Both packages include their font licenses.
Theme tokens and article styles live in `src/styles/global.css`.
