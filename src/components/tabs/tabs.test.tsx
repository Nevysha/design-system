import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const Example = () => (
  <Tabs defaultValue="settings">
    <TabsList aria-label="Project">
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsTrigger value="members">Members</TabsTrigger>
    </TabsList>
    <TabsContent value="settings">Settings panel</TabsContent>
    <TabsContent value="members">Members panel</TabsContent>
  </Tabs>
);

describe("Tabs", () => {
  it("shows the default tab", () => {
    render(<Example />);
    expect(screen.getByRole("tab", { name: "Settings" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Settings panel");
  });

  it("switches panel on click", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("tab", { name: "Members" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Members panel");
  });

  it("moves between tabs with arrow keys", async () => {
    render(<Example />);
    screen.getByRole("tab", { name: "Settings" }).focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Members" })).toHaveFocus();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Members panel");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Example />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
