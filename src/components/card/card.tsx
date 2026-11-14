import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * A bordered surface that groups related content (a settings section, a metric, a list).
 * Compose with CardHeader / CardTitle / CardDescription / CardContent / CardFooter.
 * Don't nest cards inside cards, and don't wrap every block in one: use spacing first.
 */
export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("flex flex-col gap-4 rounded-lg border border-border-subtle bg-surface py-5 text-text shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("grid gap-1 px-5", className)} {...props} />;
}

/** The card's heading, an <h3>. */
export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("text-lg leading-tight font-semibold", className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p data-slot="card-description" className={cn("text-sm text-text-muted", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-5", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("flex items-center gap-3 px-5", className)} {...props} />;
}
