import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input";
import { Label } from "./label";

const meta = { title: "Forms/Label", component: Label, tags: ["autodocs"] } satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  render: () => (
    <div className="grid max-w-xs gap-2">
      <Label htmlFor="project">Project name</Label>
      <Input id="project" placeholder="Atlas dashboard" />
    </div>
  ),
};
