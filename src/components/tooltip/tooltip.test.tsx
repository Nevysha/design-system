import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const Example = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger>Settings</TooltipTrigger>
      <TooltipContent>Open project settings</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

describe("Tooltip", () => {
  it("is hidden until the trigger is focused", async () => {
    render(<Example />);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    await userEvent.tab();
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Open project settings");
  });

  it("describes its trigger for screen readers", async () => {
    render(<Example />);
    await userEvent.tab();
    await screen.findByRole("tooltip");
    expect(screen.getByRole("button", { name: "Settings" })).toHaveAccessibleDescription("Open project settings");
  });

  it("closes on Escape", async () => {
    render(<Example />);
    await userEvent.tab();
    await screen.findByRole("tooltip");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
