import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Label } from "../label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const Example = (props: Parameters<typeof Select>[0]) => (
  <>
    <Label htmlFor="region">Region</Label>
    <Select {...props}>
      <SelectTrigger id="region">
        <SelectValue placeholder="Choose a region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="eu">Europe (Frankfurt)</SelectItem>
        <SelectItem value="us">US East</SelectItem>
        <SelectItem value="ap" disabled>Asia Pacific</SelectItem>
      </SelectContent>
    </Select>
  </>
);

describe("Select", () => {
  it("shows the placeholder, named by its label", () => {
    render(<Example />);
    expect(screen.getByRole("combobox", { name: "Region" })).toHaveTextContent("Choose a region");
  });

  it("opens and picks an option", async () => {
    const onChange = vi.fn();
    render(<Example onValueChange={onChange} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(await screen.findByRole("option", { name: "US East" }));
    expect(onChange).toHaveBeenCalledWith("us");
    expect(screen.getByRole("combobox")).toHaveTextContent("US East");
  });

  it("marks disabled options", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(await screen.findByRole("option", { name: "Asia Pacific" })).toHaveAttribute("aria-disabled", "true");
  });

  it("shows the default value", () => {
    render(<Example defaultValue="eu" />);
    expect(screen.getByRole("combobox")).toHaveTextContent("Europe (Frankfurt)");
  });

  it("has no accessibility violations when closed", async () => {
    const { container } = render(<Example />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
