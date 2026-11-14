import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Label } from "../label";
import { Checkbox } from "./checkbox";

const Field = (props: Parameters<typeof Checkbox>[0]) => (
  <div className="flex gap-2">
    <Checkbox id="weekly" {...props} />
    <Label htmlFor="weekly">Send me a weekly summary</Label>
  </div>
);

describe("Checkbox", () => {
  it("toggles on click and calls onCheckedChange", async () => {
    const onChange = vi.fn();
    render(<Field onCheckedChange={onChange} />);
    const box = screen.getByRole("checkbox", { name: "Send me a weekly summary" });
    expect(box).not.toBeChecked();
    await userEvent.click(box);
    expect(box).toBeChecked();
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("toggles when its label is clicked", async () => {
    render(<Field />);
    await userEvent.click(screen.getByText("Send me a weekly summary"));
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("toggles with the Space key", async () => {
    render(<Field />);
    screen.getByRole("checkbox").focus();
    await userEvent.keyboard(" ");
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("supports the indeterminate state", () => {
    render(<Field checked="indeterminate" />);
    expect(screen.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  });

  it("does not toggle when disabled", async () => {
    render(<Field disabled />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Field defaultChecked />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
