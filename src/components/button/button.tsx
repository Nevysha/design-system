import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
    "transition-colors outline-none select-none",
    "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-accent text-on-accent hover:bg-accent-hover",
        secondary: "border border-border bg-control text-text hover:bg-control-hover",
        ghost: "text-accent-text hover:bg-accent-subtle",
        danger: "bg-danger text-on-danger hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
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
export function Button({ className, variant, size, asChild = false, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      // Default to type="button" so a Button inside a form doesn't submit it by accident.
      type={asChild ? type : (type ?? "button")}
      {...props}
    />
  );
}
