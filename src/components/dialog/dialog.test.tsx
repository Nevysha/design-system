import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axeViolations } from "@/test/axe";
import { Button } from "../button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

const Example = ({ onArchive = () => {} }: { onArchive?: () => void }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Archive project</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Archive this project?</DialogTitle>
        <DialogDescription>Members lose access, but you can restore it for 30 days.</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button variant="danger" onClick={onArchive}>Archive</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

describe("Dialog", () => {
  it("opens from its trigger with an accessible name and description", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Archive project" }));
    const dialog = await screen.findByRole("dialog", { name: "Archive this project?" });
    expect(dialog).toHaveAccessibleDescription("Members lose access, but you can restore it for 30 days.");
  });

  it("closes with Escape and returns focus to the trigger", async () => {
    render(<Example />);
    const trigger = screen.getByRole("button", { name: "Archive project" });
    await userEvent.click(trigger);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes with Cancel and with the × button", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Archive project" }));
    await userEvent.click(await screen.findByRole("button", { name: "Cancel" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Archive project" }));
    await userEvent.click(await screen.findByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("runs the confirm action", async () => {
    const onArchive = vi.fn();
    render(<Example onArchive={onArchive} />);
    await userEvent.click(screen.getByRole("button", { name: "Archive project" }));
    await userEvent.click(await screen.findByRole("button", { name: "Archive" }));
    expect(onArchive).toHaveBeenCalledOnce();
  });

  it("has no accessibility violations when open", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "Archive project" }));
    expect(await axeViolations(await screen.findByRole("dialog"))).toEqual([]);
  });
});
