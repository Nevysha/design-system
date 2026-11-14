import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { fieldClasses } from "../input/input";

/**
 * Multi-line text field (descriptions, comments, messages). Same rules as `Input`:
 * a visible `Label`, `aria-invalid` + `aria-describedby` for errors.
 */
export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(fieldClasses, "min-h-24 px-3 py-2", className)} {...props} />;
}
