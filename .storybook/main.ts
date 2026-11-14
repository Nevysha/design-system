import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  core: { disableTelemetry: true },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    // Lets coding agents query components and stories over MCP while Storybook runs.
    "@storybook/addon-mcp",
  ],
};

export default config;
