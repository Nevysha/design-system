import { type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
export declare const badgeVariants: (props?: ({
    variant?: "neutral" | "accent" | "success" | "warning" | "danger" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
/**
 * Short status or category label ("Healthy", "Beta", "3 new"). Not clickable: use a Button for actions.
 * Pick the variant by meaning (success / warning / danger), not by the color you want.
 * Don't rely on color alone: the text must say the status.
 */
export declare function Badge({ className, variant, ...props }: BadgeProps): import("react").JSX.Element;
