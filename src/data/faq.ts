// FAQ accordion content. Keep questions short; answers in 1-3 short paragraphs.
// Edits land directly here — Faq.astro just iterates over this array.

export interface FaqEntry {
  q: string;
  a: string;
}

export const faq: FaqEntry[] = [
  {
    q: "What does llamastash actually do?",
    a:
      "It's a TUI in front of llama.cpp. You point it at a folder of GGUF model files; it browses them, recommends the right one for your hardware, and launches llama-server with sensible defaults. Think k9s, but for local LLMs.",
  },
  {
    q: "Does it send any data to a server?",
    a:
      "No. Every connection is to localhost. The model files stay on your disk, inference happens in your process, and llamastash itself has no telemetry, no analytics, no remote configuration. The networking surface is auditable — `lsof -i` will show you exactly one listener: yours.",
  },
  {
    q: "What platforms does it support?",
    a:
      "macOS (Apple Silicon + Intel) and Linux (x86_64 + aarch64) are first-class. Windows is supported via source build (`cargo install llamastash`); no prebuilt Windows binary in 0.0.1.",
  },
  {
    q: "Do I need llama.cpp installed already?",
    a:
      "Optional. If you already have `llama-server` on your PATH, llamastash will use it. If not, the init wizard offers to install a recommended build via brew or by downloading a prebuilt binary from llama.cpp's releases.",
  },
  {
    q: "How is this different from Ollama, LM Studio, or jan?",
    a:
      "Ollama is a CLI + daemon — great for scripting, less for browsing models. LM Studio and jan are full GUIs. llamastash is the keyboard-driven middle ground: a single binary, no daemon, no Electron, no model packaging — works directly against the GGUF files you already have.",
  },
  {
    q: "Is the install script safe to pipe into sh?",
    a:
      "The script is served from this site as a content-verified mirror of the asset published with each GitHub Release, with a SHA-256 sidecar verified at deploy time. The most paranoid path is to download install.sh, read it (it's ~300 lines), then run it. Or skip the script entirely and use `cargo install llamastash` or `brew install llamastash/llamastash/llamastash`.",
  },
  {
    q: "Can I use llamastash with non-GGUF models?",
    a:
      "Not in 0.0.1 — llama.cpp is the runtime, and llama.cpp consumes GGUF. Other runtimes (vLLM, mlx-lm) are on the roadmap as opt-in backends once the GGUF + llama.cpp path is solid.",
  },
  {
    q: "Is it open source?",
    a:
      "Yes — MIT licensed. Source at github.com/llamastash/llamastash. Issues and PRs welcome.",
  },
];
