import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Healthy", variant: "success" },
  argTypes: { variant: { control: "inline-radio", options: ["neutral", "accent", "success", "warning", "danger"] } },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Draft</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="success">Healthy</Badge>
      <Badge variant="warning">Degraded</Badge>
      <Badge variant="danger">Down</Badge>
    </div>
  ),
};
