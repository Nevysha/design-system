import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "./select";

const meta = { title: "Forms/Select", component: Select, tags: ["autodocs"] } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="grid max-w-xs gap-2">
      <Label htmlFor="region">Region</Label>
      <Select>
        <SelectTrigger id="region"><SelectValue placeholder="Choose a region" /></SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="fra">Frankfurt</SelectItem>
            <SelectItem value="par">Paris</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Americas</SelectLabel>
            <SelectItem value="iad">US East</SelectItem>
            <SelectItem value="gru" disabled>São Paulo (soon)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
