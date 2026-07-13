// Six feature cards in the Features grid. Each `accent` is a Catppuccin token
// name (without the `catppuccin-` prefix) so the icon container can color
// itself consistently with the palette.

export interface Feature {
  title: string;
  body: string;
  accent:
    | "mauve"
    | "blue"
    | "green"
    | "peach"
    | "yellow"
    | "teal"
    | "sky"
    | "lavender";
}

export const features: Feature[] = [
  {
    title: "Zero-to-chat init wizard",
    body: "Run `llamastash init` once and it handles the annoying first-run work: detect hardware, install the right llama-server build, download a starter GGUF, write config, and smoke-launch it.",
    accent: "mauve",
  },
  {
    title: "Scans what you already have",
    body: "Walks HuggingFace, Ollama, and LM Studio caches plus user paths. Reads GGUF metadata, dedupes symlinks and split files, and watches the catalog for new models without a restart.",
    accent: "green",
  },
  {
    title: "One binary, three roles",
    body: "The TUI, CLI, and daemon are the same binary. The daemon auto-spawns when needed, and running models survive UI exit. The CLI is built for agents too: stable `--json` output, documented exit codes, and an installable AgentSkills bundle for Claude Code, OpenCode, and other harnesses.",
    accent: "blue",
  },
  {
    title: "Multiple inference backends",
    body: "llama.cpp is the direct, zero-overhead default. Two experimental backends plug into the same seam: Lemonade for NPU and non-GGUF engines (ONNX, vLLM) on AMD Ryzen AI, and ds4 (DwarfStar) for antirez's DeepSeek-V4 GGUFs. Each auto-detects when its engine is installed and stays out of the way when it isn't.",
    accent: "sky",
  },
  {
    title: "Hardware-aware launches",
    body: "Built-in arch defaults, per-model ports, health-probed lifecycle, and intelligent context auto-fit mean fewer bad launches and fewer manual llama.cpp flags for every machine you touch.",
    accent: "peach",
  },
  {
    title: "OpenAI, Anthropic + Ollama proxy",
    body: "A built-in localhost proxy on `127.0.0.1:11435` routes by model name and auto-starts the model you ask for. It speaks the OpenAI API, the Anthropic Messages API (`/v1/messages`, so Claude Code attaches via `ANTHROPIC_BASE_URL`), and can impersonate Ollama on `11434` for drop-in compatibility.",
    accent: "yellow",
  },
];
