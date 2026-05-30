# llamastash.github.io

Source for [llamastash.dev](https://llamastash.dev) — the marketing site for [llamastash](https://github.com/llamastash/llamastash).

![Logo](https://raw.githubusercontent.com/llamastash/llamastash/main/assets/logo-h.jpg)

**Zero-overhead, terminal-native `llama.cpp` launcher.**

A fast TUI **and** CLI with init wizard for launching local LLMs via [llama.cpp](https://github.com/ggml-org/llama.cpp). One Rust binary that's a TUI, a CLI, a daemon, and an OpenAI-compatible proxy. Zero overhead vs raw `llama-server`.

## Stack

- [Astro 4](https://astro.build/) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com/) — styling
- [asciinema-player](https://github.com/asciinema/asciinema-player) — hero terminal cast
- [Catppuccin Macchiato](https://catppuccin.com/palette) — the palette, same as the TUI's default theme

## Develop

```sh
npm install
npm run dev
# open http://localhost:4321
```

## Build

```sh
npm run build
# output: dist/
```

## Deploy

`.github/workflows/deploy.yml` runs `npm run build` and ships `dist/` to GitHub Pages on every push to `main`. The repo's Pages source must be **GitHub Actions** (auto-enabled on first deploy via `actions/configure-pages@v5`'s `enablement: true`).

## How install.sh stays current

The site serves `/install.sh` as a SHA-256-verified mirror of the install script published with each GitHub Release of the main repo. `.github/workflows/bump.yml` listens for `repository_dispatch` events from the main repo's `release.yml`, fetches `install.sh` + `install.sh.sha256` from the tagged release, verifies the checksum, and commits the result into `public/`.

## Reporting issues

Site bugs (typos, layout, broken links) belong here. Bugs in LlamaStash itself belong in [llamastash/llamastash](https://github.com/llamastash/llamastash/issues).
