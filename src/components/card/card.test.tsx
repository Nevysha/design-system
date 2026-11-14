import { render, screen } from "@testing-library/react";
import { axeViolations } from "@/test/axe";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

const Example = () => (
  <Card data-testid="card">
    <CardHeader>
      <CardTitle>Deploys</CardTitle>
      <CardDescription>Last 7 days</CardDescription>
    </CardHeader>
    <CardContent>1,284</CardContent>
    <CardFooter>View all</CardFooter>
  </Card>
);

describe("Card", () => {
  it("renders a heading and its parts", () => {
    render(<Example />);
    expect(screen.getByRole("heading", { name: "Deploys" })).toBeInTheDocument();
    expect(screen.getByText("Last 7 days")).toBeInTheDocument();
    expect(screen.getByText("1,284")).toBeInTheDocument();
  });

  it("uses the surface tokens", () => {
    render(<Example />);
    expect(screen.getByTestId("card")).toHaveClass("bg-surface", "border-border-subtle");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Example />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
