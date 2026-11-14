import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../badge";
import { Button } from "../button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const meta = { title: "Components/Card", component: Card, tags: ["autodocs"] } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Metric: Story = {
  render: () => (
    <Card className="max-w-xs">
      <CardHeader>
        <CardDescription>Deploys this week</CardDescription>
        <CardTitle className="text-2xl tabular-nums">1,284</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Badge variant="success">+12.4%</Badge>
        <Badge>7 days</Badge>
      </CardContent>
    </Card>
  ),
};

export const Settings: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Archive project</CardTitle>
        <CardDescription>Members lose access, but you can restore it for 30 days.</CardDescription>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Archive</Button>
      </CardFooter>
    </Card>
  ),
};
