import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Shared look of text fields (Input, Textarea, Select trigger). */
export const fieldClasses = [
  "w-full min-w-0 rounded-md border border-border bg-surface text-base text-text",
  "placeholder:text-text-muted hover:border-border-strong transition-colors outline-none",
  "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-focus/40",
  "aria-invalid:border-danger aria-invalid:focus-visible:ring-danger/40",
  "disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

/**
 * Single-line text field. Always give it a visible `Label` (via `id` + `htmlFor`).
 * Mark errors with `aria-invalid` and point `aria-describedby` at the error message.
 * Use `Textarea` for multi-line text and `Select` for a fixed list of choices.
 */
export function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(fieldClasses, "h-10 px-3", "file:mr-3 file:border-0 file:bg-transparent file:font-medium file:text-text", className)}
      {...props}
    />
  );
}
