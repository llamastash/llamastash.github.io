// FAQ accordion content. Keep questions short; answers in 1-3 short paragraphs.
// Edits land directly here — Faq.astro just iterates over this array.

export interface FaqEntry {
  q: string;
  a: string;
}

export const faq: FaqEntry[] = [
  {
    q: "What does LlamaStash actually do?",
    a: "It's a terminal-native TUI and CLI for launching local LLMs. It runs them through llama.cpp — the direct, zero-overhead backend, behind a pluggable backend seam for other engines. It scans the GGUF files you already have, helps you pick the right one for your hardware, starts and supervises llama-server, and exposes a local OpenAI-compatible proxy for tools and agents.",
  },
  {
    q: "Does it send any data to a server?",
    a: "Inference traffic stays on your machine by default. The main runtime surface is local: a bearer-token-authed 127.0.0.1 HTTP control plane for the daemon, and a loopback OpenAI-compatible proxy for clients. You can opt the proxy onto your LAN (`--proxy-host`), but only behind a bearer key it auto-provisions and enforces — the control plane and llama-server children always stay loopback. `init`, `pull`, and parts of `doctor` use the network to download or verify artifacts, but LlamaStash itself has no telemetry or analytics pipeline.",
  },
  {
    q: "What platforms does it support?",
    a: "macOS (Apple Silicon + Intel), Linux (x86_64 + aarch64), and Windows 11 (x86_64) are first-class. aarch64-pc-windows-msvc on Windows is on the roadmap.",
  },
  {
    q: "Do I need llama.cpp installed already?",
    a: "Optional. If you already have `llama-server` on your PATH, LlamaStash will use it. If not, the init wizard offers to install a recommended build via brew or by downloading a prebuilt binary from llama.cpp's releases.",
  },
  {
    q: "How is this different from Ollama, LM Studio, or jan?",
    a: "Ollama is opinionated around its own model packaging and daemon workflow. LM Studio and jan are heavier GUIs. LlamaStash is the transparent middle ground: one binary, daemon on demand, works directly against the GGUF files you already have, and gives you the same primitives in the TUI, CLI, and local proxy.",
  },
  {
    q: "Is the install script safe to pipe into sh?",
    a: "The script is served from this site as a content-verified mirror of the asset published with each GitHub Release, with a SHA-256 sidecar verified at deploy time. If you want the most paranoid path, download it, read it, and run it yourself. Or skip the script entirely and use `cargo install llamastash` or `brew install llamastash/llamastash/llamastash`.",
  },
  {
    q: "Can I use LlamaStash with non-GGUF models?",
    a: "llama.cpp is the default backend and it consumes GGUF, so GGUF is the main path. An experimental, opt-in Lemonade backend adds NPU and multi-engine inference — ONNX, vLLM, and more via a user-installed Lemonade Server — for hardware llama.cpp can't reach, like AMD's XDNA NPU. Native peer backends such as mlx-lm are still on the roadmap behind the same pluggable seam.",
  },
  {
    q: "Can I point agents or editors at it?",
    a: "Yes. LlamaStash ships a local OpenAI-compatible proxy at `http://127.0.0.1:11435/v1` by default, with optional Ollama-compat mode on `11434`. It also ships an AgentSkills bundle under `skills/llamastash/` and a Claude Code plugin manifest for install flows that want a repo-packaged skill.",
  },
  {
    q: "Is it open source?",
    a: "Yes — MIT licensed. Source at github.com/llamastash/llamastash. Issues and PRs welcome.",
  },
];
