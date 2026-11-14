import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Switch } from "./switch";

const meta = { title: "Forms/Switch", component: Switch, tags: ["autodocs"] } satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Switch id="s1" {...args} />
      <Label htmlFor="s1">Public link</Label>
    </div>
  ),
};
export const On: Story = { ...WithLabel, args: { defaultChecked: true } };
export const Disabled: Story = { ...WithLabel, args: { disabled: true } };
