import { Label as LabelPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * Text label for a form control. Always pair it with the control via `htmlFor` / `id`
 * (or wrap the control), so clicking the label focuses the control and screen readers announce it.
 * Don't use it for headings or plain text.
 */
export declare function Label({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>): import("react").JSX.Element;
