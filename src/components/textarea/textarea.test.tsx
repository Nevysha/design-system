import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("accepts multi-line text", async () => {
    render(<Textarea aria-label="Notes" />);
    await userEvent.type(screen.getByRole("textbox"), "line 1{enter}line 2");
    expect(screen.getByRole("textbox")).toHaveValue("line 1\nline 2");
  });

  it("shares the field look", () => {
    render(<Textarea aria-label="Notes" />);
    expect(screen.getByRole("textbox")).toHaveClass("border-border", "bg-surface");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<><label htmlFor="t">Notes</label><Textarea id="t" /></>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
