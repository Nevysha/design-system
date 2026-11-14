import { type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
export declare const buttonVariants: (props?: ({
    variant?: "danger" | "primary" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. a router <Link>) with button styles instead of a <button>. */
    asChild?: boolean;
};
/**
 * Triggers an action.
 *
 * - `primary`: the main action of a view. Use at most one per area.
 * - `secondary`: other actions next to a primary one.
 * - `ghost`: low-emphasis actions (toolbars, "Learn more").
 * - `danger`: destructive actions (delete, remove). Confirm them in a Dialog.
 *
 * For navigation, use `asChild` with a link instead of an onClick that changes location.
 * Icon-only buttons (`size="icon"`) must have an `aria-label`.
 */
export declare function Button({ className, variant, size, asChild, type, ...props }: ButtonProps): import("react").JSX.Element;
