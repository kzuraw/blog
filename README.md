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

## Dependency updates

[Renovate](https://github.com/apps/renovate) is configured in `renovate.json` to
open dependency update pull requests on Mondays between 06:00 and 10:00
(Europe/Warsaw). It tracks npm dependencies, the pnpm version in `package.json`,
and Node.js in `.node-version`, and refreshes `pnpm-lock.yaml` weekly.
All updates, including major versions, pnpm, Node.js, and lockfile maintenance,
are grouped into one pull request.
Updates wait seven days after release, matching the release-age policy in
`pnpm-workspace.yaml`. Pull requests require manual review and merging.
`pnpm build`.

## Credit

This blog is generated using [Astro Build](https://astro.build/).

The theme uses Tailwind CSS. Typography is self-hosted through Fontsource: [Nebula Sans](https://fontsource.org/fonts/nebula-sans)
via `@fontsource/nebula-sans` for text and headings, and Source Code Pro via
`@fontsource/source-code-pro` for code and dates. Both packages include their font licenses.
Theme tokens and article styles live in `src/styles/global.css`.
