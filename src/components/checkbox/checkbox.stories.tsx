import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Checkbox } from "./checkbox";

const meta = { title: "Forms/Checkbox", component: Checkbox, tags: ["autodocs"] } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="c1" {...args} />
      <Label htmlFor="c1">Send me a weekly summary</Label>
    </div>
  ),
};
export const Checked: Story = { ...WithLabel, args: { defaultChecked: true } };
export const Indeterminate: Story = { ...WithLabel, args: { checked: "indeterminate" } };
export const Disabled: Story = { ...WithLabel, args: { disabled: true } };
