import { Dialog as DialogPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * A modal window that blocks the page until the user acts: confirming a destructive action,
 * or a short focused task (rename, invite). Keep it short; long flows belong on a page.
 * Always include a `DialogTitle` (screen readers announce it) and usually a `DialogDescription`.
 * Focus trapping, Escape to close and focus return are handled by Radix.
 */
export declare function Dialog(props: ComponentProps<typeof DialogPrimitive.Root>): import("react").JSX.Element;
export declare function DialogTrigger(props: ComponentProps<typeof DialogPrimitive.Trigger>): import("react").JSX.Element;
export declare function DialogClose(props: ComponentProps<typeof DialogPrimitive.Close>): import("react").JSX.Element;
export type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
    /** Show the × button in the corner. Default true. */
    showCloseButton?: boolean;
};
export declare function DialogContent({ className, children, showCloseButton, ...props }: DialogContentProps): import("react").JSX.Element;
export declare function DialogHeader({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
export declare function DialogFooter({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
export declare function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>): import("react").JSX.Element;
export declare function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>): import("react").JSX.Element;
