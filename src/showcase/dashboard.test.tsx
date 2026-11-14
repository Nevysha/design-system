import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dismissAllToasts } from "../components/toast";
import { axeViolations } from "../test/axe";
import { Dashboard } from "./dashboard";

afterEach(() => dismissAllToasts());

describe("Dashboard showcase", () => {
  it("renders every section without accessibility violations", async () => {
    const { container } = render(<Dashboard />);
    expect(screen.getByRole("heading", { name: "Atlas" })).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });

  it("opens the new project dialog and confirms with a toast", async () => {
    const user = userEvent.setup();
    render(<Dashboard />);
    await user.click(screen.getByRole("button", { name: "New project" }));
    expect(screen.getByRole("dialog", { name: "Create a project" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Create" }));
    expect(await screen.findByText("Project created")).toBeInTheDocument();
  });
});
