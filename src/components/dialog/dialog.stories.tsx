import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

const meta = { title: "Components/Dialog", component: Dialog, tags: ["autodocs"] } satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Confirming a destructive action. */
export const Confirm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button variant="danger">Archive project</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Archive this project?</DialogTitle>
          <DialogDescription>Members lose access, but you can restore it for 30 days.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
          <Button variant="danger">Archive</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/** A short focused task. */
export const Form: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild><Button variant="secondary">Rename</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename project</DialogTitle>
          <DialogDescription>The new name appears in the sidebar for everyone.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="new-name">Project name</Label>
          <Input id="new-name" defaultValue="Atlas dashboard" />
        </div>
        <DialogFooter>
          <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
