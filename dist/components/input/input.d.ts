import type { ComponentProps } from "react";
/** Shared look of text fields (Input, Textarea, Select trigger). */
export declare const fieldClasses: string;
/**
 * Single-line text field. Always give it a visible `Label` (via `id` + `htmlFor`).
 * Mark errors with `aria-invalid` and point `aria-describedby` at the error message.
 * Use `Textarea` for multi-line text and `Select` for a fixed list of choices.
 */
export declare function Input({ className, type, ...props }: ComponentProps<"input">): import("react").JSX.Element;
