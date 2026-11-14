import { Tooltip as TooltipPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * Wrap the app (or a section) once. Controls the hover delay for every tooltip inside.
 */
export declare function TooltipProvider({ delayDuration, ...props }: ComponentProps<typeof TooltipPrimitive.Provider>): import("react").JSX.Element;
/**
 * A short hint shown on hover and keyboard focus, mainly to name icon-only buttons.
 * Never put essential information or interactive content in a tooltip (touch users can't hover):
 * use visible text or a Dialog instead. Needs a `TooltipProvider` above it.
 */
export declare function Tooltip(props: ComponentProps<typeof TooltipPrimitive.Root>): import("react").JSX.Element;
export declare function TooltipTrigger(props: ComponentProps<typeof TooltipPrimitive.Trigger>): import("react").JSX.Element;
export declare function TooltipContent({ className, sideOffset, children, ...props }: ComponentProps<typeof TooltipPrimitive.Content>): import("react").JSX.Element;
