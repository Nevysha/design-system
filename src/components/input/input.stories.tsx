import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Input } from "./input";

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Atlas dashboard" },
  decorators: [(Story) => <div className="max-w-xs">{Story()}</div>],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { "aria-label": "Project name" } };
export const Disabled: Story = { args: { "aria-label": "Project name", disabled: true, value: "Read only" } };

/** A complete field: label, input, help text. */
export const WithLabelAndHelp: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="name">Project name</Label>
      <Input id="name" aria-describedby="name-help" placeholder="Atlas dashboard" />
      <p id="name-help" className="text-sm text-text-muted">Shown in the sidebar.</p>
    </div>
  ),
};

/** Errors: aria-invalid plus a message linked with aria-describedby. */
export const WithError: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="email">Owner email</Label>
      <Input id="email" type="email" defaultValue="atlas@" aria-invalid aria-describedby="email-error" />
      <p id="email-error" className="text-sm text-danger-text">Enter a full email address.</p>
    </div>
  ),
};
