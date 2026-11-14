import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Textarea } from "./textarea";

const meta = { title: "Forms/Textarea", component: Textarea, tags: ["autodocs"] } satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: () => (
    <div className="grid max-w-md gap-2">
      <Label htmlFor="desc">Description</Label>
      <Textarea id="desc" placeholder="What is this project for?" />
    </div>
  ),
};
