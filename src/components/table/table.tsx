import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

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
export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn("w-full caption-bottom text-sm text-text", className)} {...props} />
    </div>
  );
}

export function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
}

export function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

export function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("border-t bg-control font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  );
}

/** A row. `data-state="selected"` highlights the chosen row. */
export function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border-subtle transition-colors hover:bg-control-hover/50 data-[state=selected]:bg-accent-subtle",
        className,
      )}
      {...props}
    />
  );
}

/** A column heading, a <th>. */
export function TableHead({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn("h-10 px-3 text-left align-middle font-semibold whitespace-nowrap text-text-muted", className)}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: ComponentProps<"td">) {
  return <td data-slot="table-cell" className={cn("px-3 py-2 align-middle", className)} {...props} />;
}

export function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return <caption data-slot="table-caption" className={cn("mt-3 text-sm text-text-muted", className)} {...props} />;
}
