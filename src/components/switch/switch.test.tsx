import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Label } from "../label";
import { Switch } from "./switch";

const Field = (props: Parameters<typeof Switch>[0]) => (
  <div className="flex gap-2">
    <Switch id="public" {...props} />
    <Label htmlFor="public">Public link</Label>
  </div>
);

describe("Switch", () => {
  it("is a switch named by its label", () => {
    render(<Field />);
    expect(screen.getByRole("switch", { name: "Public link" })).toHaveAttribute("aria-checked", "false");
  });

  it("toggles on click and reports the new value", async () => {
    const onChange = vi.fn();
    render(<Field onCheckedChange={onChange} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("toggles with the keyboard", async () => {
    render(<Field defaultChecked />);
    screen.getByRole("switch").focus();
    await userEvent.keyboard(" ");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Field />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
