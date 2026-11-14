import type { ComponentProps } from "react";
/**
 * A bordered surface that groups related content (a settings section, a metric, a list).
 * Compose with CardHeader / CardTitle / CardDescription / CardContent / CardFooter.
 * Don't nest cards inside cards, and don't wrap every block in one: use spacing first.
 */
export declare function Card({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
export declare function CardHeader({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
/** The card's heading, an <h3>. */
export declare function CardTitle({ className, ...props }: ComponentProps<"h3">): import("react").JSX.Element;
export declare function CardDescription({ className, ...props }: ComponentProps<"p">): import("react").JSX.Element;
export declare function CardContent({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
export declare function CardFooter({ className, ...props }: ComponentProps<"div">): import("react").JSX.Element;
