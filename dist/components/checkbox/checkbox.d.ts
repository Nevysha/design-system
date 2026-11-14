import { Checkbox as CheckboxPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * A yes/no choice that takes effect when the form is submitted, or one of several
 * independent options in a list. Pair it with a `Label`.
 * For a setting that applies immediately, use `Switch`. Supports `checked="indeterminate"`
 * for "select all" rows where only some items are selected.
 */
export declare function Checkbox({ className, ...props }: ComponentProps<typeof CheckboxPrimitive.Root>): import("react").JSX.Element;
