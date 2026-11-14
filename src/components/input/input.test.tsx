import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Input } from "./input";

describe("Input", () => {
  it("accepts typing", async () => {
    render(<Input aria-label="Name" />);
    await userEvent.type(screen.getByRole("textbox"), "Atlas");
    expect(screen.getByRole("textbox")).toHaveValue("Atlas");
  });

  it("defaults to type=text and keeps other types", () => {
    const { rerender } = render(<Input aria-label="Name" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
    rerender(<Input aria-label="Email" type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
  });

  it("exposes the invalid state", () => {
    render(<Input aria-label="Email" aria-invalid />);
    expect(screen.getByRole("textbox")).toBeInvalid();
  });

  it("can't be edited when disabled", async () => {
    render(<Input aria-label="Name" disabled />);
    await userEvent.type(screen.getByRole("textbox"), "x");
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  it("merges className", () => {
    render(<Input aria-label="Name" className="max-w-xs" />);
    expect(screen.getByRole("textbox")).toHaveClass("max-w-xs", "border-border");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<><label htmlFor="i">Name</label><Input id="i" /></>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
