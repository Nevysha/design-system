import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dashboard } from "./dashboard";

/**
 * A fake project dashboard that uses every component together, with the current theme.
 * Click around: the dialogs, the select, the tooltips and the toasts all work.
 * To try other colors, spacing or fonts on it, open **Playground/Theme**.
 */
const meta = {
  title: "Showcase/Dashboard",
  component: Dashboard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Dashboard>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
