import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Label } from "./label";

describe("Label", () => {
  it("labels its control", () => {
    render(<><Label htmlFor="name">Project name</Label><input id="name" /></>);
    expect(screen.getByLabelText("Project name")).toBeInTheDocument();
  });

  it("focuses the control when clicked", async () => {
    render(<><Label htmlFor="name">Project name</Label><input id="name" /></>);
    await userEvent.click(screen.getByText("Project name"));
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<><Label htmlFor="n">Name</Label><input id="n" /></>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
