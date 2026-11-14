import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { toast, Toaster } from "./toast";

const meta = {
  title: "Components/Toast",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [(Story) => <>{Story()}<Toaster /></>],
} satisfies Meta<typeof Toaster>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" onClick={() => toast({ title: "Link copied" })}>Neutral</Button>
      <Button variant="secondary" onClick={() => toast({ title: "Project archived", description: "You can restore it for 30 days.", variant: "success" })}>Success</Button>
      <Button variant="secondary" onClick={() => toast({ title: "Deploy failed", description: "Build step exited with code 1.", variant: "danger" })}>Danger</Button>
    </div>
  ),
};
