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

## Diagrams

Diagrams are written in [D2](https://d2lang.com/) and rendered as static SVGs.
Keep each `.d2` source and its generated `.svg` together in
`src/assets/diagrams/`, using `YYYY-MM-DD-description` filenames to match image
assets (subdirectories are supported). Use the associated post's date; the
standalone example uses its creation date.

Install the CLI on macOS:

```shell
brew install d2
```

For other platforms, see the [D2 installation guide](https://d2lang.com/tour/install/).
Copy `src/assets/diagrams/2026-09-27-request-flow.d2` as a starting point. Include
this theme configuration in each diagram for a consistent look:

```d2
vars: {
  d2-config: {
    # Neutral Grey, with the blog's ink and white background.
    theme-id: 1
    theme-overrides: {
      N1: "#111111"
      N7: "#FFFFFF"
    }
  }
}
```

Edit the diagram, then render all diagrams:

```shell
pnpm diagrams
```

Embed the generated SVG in a post under `src/content/blog/`:

```markdown
![The browser requests a page from the web server, which queries the database and returns HTML.](../../assets/diagrams/2026-09-27-request-flow.svg)
```

Use descriptive alt text and explain complex diagrams in the surrounding prose.
Prefer small diagrams and vertical flows so labels remain readable on mobile.
To preview one diagram while editing, D2 has a browser-based watch mode:

```shell
d2 --watch src/assets/diagrams/2026-09-27-request-flow.d2 src/assets/diagrams/2026-09-27-request-flow.svg
```

Commit both the source and generated SVG after changes. Treat SVGs as generated
files: edit the D2 source and rerun `pnpm diagrams`. When removing or renaming a
source, also remove or rename its SVG and update any post references. Rendering
is deliberately separate from `pnpm build`, so deployment only needs the
committed SVGs and no diagram JavaScript is sent to readers.

## Credit

This blog is generated using [Astro Build](https://astro.build/).

The theme uses Tailwind CSS. Typography is self-hosted through Fontsource: [Nebula Sans](https://fontsource.org/fonts/nebula-sans)
via `@fontsource/nebula-sans` for text and headings, and Source Code Pro via
`@fontsource/source-code-pro` for code and dates. Both packages include their font licenses.
Theme tokens and article styles live in `src/styles/global.css`.
