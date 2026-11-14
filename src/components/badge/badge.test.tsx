import { render, screen } from "@testing-library/react";
import { axeViolations } from "@/test/axe";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders its text", () => {
    render(<Badge>Healthy</Badge>);
    expect(screen.getByText("Healthy")).toBeInTheDocument();
  });

  it("defaults to neutral", () => {
    render(<Badge>Draft</Badge>);
    expect(screen.getByText("Draft")).toHaveClass("bg-control");
  });

  it.each([
    ["success", "bg-success-subtle"],
    ["warning", "bg-warning-subtle"],
    ["danger", "bg-danger-subtle"],
    ["accent", "bg-accent-subtle"],
  ] as const)("applies the %s variant", (variant, cls) => {
    render(<Badge variant={variant}>x</Badge>);
    expect(screen.getByText("x")).toHaveClass(cls);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Badge variant="success">Healthy</Badge>);
    expect(await axeViolations(container)).toEqual([]);
  });
});
