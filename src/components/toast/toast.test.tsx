import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dismissAllToasts, dismissToast, toast, Toaster } from "./toast";

afterEach(() => act(() => dismissAllToasts()));

describe("Toast", () => {
  it("shows a toast when toast() is called", async () => {
    render(<Toaster />);
    act(() => {
      toast({ title: "Project archived", description: "You can restore it for 30 days." });
    });
    expect(await screen.findByText("Project archived")).toBeInTheDocument();
    expect(screen.getByText("You can restore it for 30 days.")).toBeInTheDocument();
  });

  it("is dismissed with its close button", async () => {
    render(<Toaster />);
    act(() => {
      toast({ title: "Saved" });
    });
    await userEvent.click(await screen.findByRole("button", { name: "Dismiss" }));
    expect(screen.queryByText("Saved")).not.toBeInTheDocument();
  });

  it("can be dismissed by id", async () => {
    render(<Toaster />);
    let id = 0;
    act(() => {
      id = toast({ title: "Uploading…" });
    });
    expect(await screen.findByText("Uploading…")).toBeInTheDocument();
    act(() => dismissToast(id));
    expect(screen.queryByText("Uploading…")).not.toBeInTheDocument();
  });

  it("styles danger toasts", async () => {
    render(<Toaster />);
    act(() => {
      toast({ title: "Deploy failed", variant: "danger" });
    });
    expect(await screen.findByText("Deploy failed")).toHaveClass("text-danger-text");
  });
});
