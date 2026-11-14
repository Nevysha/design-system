import type { ComponentProps } from "react";
/**
 * Rows of records with the same fields (memories, files, deploys): scan, compare, act on one row.
 * Compose with TableHeader / TableBody / TableRow / TableHead / TableCell (and TableCaption, TableFooter).
 *
 * When not to use it: for one record's details (use a description list in a Card), for layout,
 * or for a handful of items that read better as a list of Cards.
 *
 * Accessibility: keep real table semantics (it renders <table>), give every column a TableHead,
 * and name the table with TableCaption (it can be visually hidden with `sr-only`) or `aria-label`.
 * A clickable row must also have a real link or button inside it for keyboard users; mark the
 * chosen row with `data-state="selected"` and `aria-selected`.
 * Wide tables scroll horizontally inside their own container instead of the page.
 */
export declare function Table({ className, ...props }: ComponentProps<"table">): import("react").JSX.Element;
export declare function TableHeader({ className, ...props }: ComponentProps<"thead">): import("react").JSX.Element;
export declare function TableBody({ className, ...props }: ComponentProps<"tbody">): import("react").JSX.Element;
export declare function TableFooter({ className, ...props }: ComponentProps<"tfoot">): import("react").JSX.Element;
/** A row. `data-state="selected"` highlights the chosen row. */
export declare function TableRow({ className, ...props }: ComponentProps<"tr">): import("react").JSX.Element;
/** A column heading, a <th>. */
export declare function TableHead({ className, ...props }: ComponentProps<"th">): import("react").JSX.Element;
export declare function TableCell({ className, ...props }: ComponentProps<"td">): import("react").JSX.Element;
export declare function TableCaption({ className, ...props }: ComponentProps<"caption">): import("react").JSX.Element;
