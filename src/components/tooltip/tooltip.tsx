import { Tooltip as TooltipPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Wrap the app (or a section) once. Controls the hover delay for every tooltip inside.
 */
export function TooltipProvider({ delayDuration = 300, ...props }: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />;
}

/**
 * A short hint shown on hover and keyboard focus, mainly to name icon-only buttons.
 * Never put essential information or interactive content in a tooltip (touch users can't hover):
 * use visible text or a Dialog instead. Needs a `TooltipProvider` above it.
 */
export function Tooltip(props: ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger(props: ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

export function TooltipContent({ className, sideOffset = 6, children, ...props }: ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        // Inverted colors so the hint stands out in both light and dark mode.
        className={cn("z-50 max-w-xs rounded-sm bg-text px-2 py-1 text-sm text-bg shadow-md", className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-text" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
