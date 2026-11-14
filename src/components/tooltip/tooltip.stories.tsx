import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsIcon } from "lucide-react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [(Story) => <TooltipProvider><div className="p-8">{Story()}</div></TooltipProvider>],
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

/** The main use: naming an icon-only button. */
export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary" size="icon" aria-label="Project settings">
          <SettingsIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Project settings</TooltipContent>
    </Tooltip>
  ),
};
