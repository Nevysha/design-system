import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta = { title: "Components/Tabs", component: Tabs, tags: ["autodocs"] } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="settings" className="max-w-md">
      <TabsList aria-label="Project">
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="audit" disabled>Audit log</TabsTrigger>
      </TabsList>
      <TabsContent value="settings" className="text-text-muted">Name, region and visibility of the project.</TabsContent>
      <TabsContent value="members" className="text-text-muted">12 people have access.</TabsContent>
      <TabsContent value="billing" className="text-text-muted">Pro plan, renews on Dec 1.</TabsContent>
    </Tabs>
  ),
};
