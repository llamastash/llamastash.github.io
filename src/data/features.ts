// Six feature cards in the Features grid. Each `accent` is a Catppuccin token
// name (without the `catppuccin-` prefix) so the icon container can color
// itself consistently with the palette.

export interface Feature {
  title: string;
  body: string;
  accent: "mauve" | "blue" | "green" | "peach" | "yellow" | "teal" | "sky" | "lavender";
}

export const features: Feature[] = [
  {
    title: "One command to launch",
    body:
      "Pick a model from your library, hit Enter, and llamastash starts a llama.cpp server with sane defaults. Memory, port, context length — all auto-tuned for your hardware.",
    accent: "mauve",
  },
  {
    title: "Local-first, always",
    body:
      "Every byte stays on your machine. No telemetry, no cloud calls, no third-party SDKs. Inspect every connection — llamastash binds to localhost and refuses anything else.",
    accent: "green",
  },
  {
    title: "Keyboard-driven",
    body:
      "Vim-style navigation, tabbed views, fuzzy model search. Mouse optional. Built for the same audience that uses k9s, lazygit, btop — you already know the shortcuts.",
    accent: "blue",
  },
  {
    title: "GGUF-aware",
    body:
      "Reads model metadata directly from your GGUF files: quantization, context window, parameter count, license. Sortable, searchable, no manual tagging.",
    accent: "peach",
  },
  {
    title: "Hardware-aware",
    body:
      "Detects your VRAM, RAM, CPU, and Metal/CUDA/Vulkan availability. Recommends the right model for the box you're on and warns before you OOM yourself.",
    accent: "yellow",
  },
  {
    title: "Zero config",
    body:
      "Works out of the box on macOS and Linux. An interactive init wizard handles the first run; doctor diagnoses anything that goes sideways later.",
    accent: "teal",
  },
];
