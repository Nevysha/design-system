import { Tabs as TabsPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * Switches between views of the same object (Settings / Members / Billing) without leaving the page.
 * Keep labels to one or two words. Don't use tabs for steps of a process or for site navigation.
 * Keyboard: arrow keys move between tabs (handled by Radix).
 */
export declare function Tabs({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>): import("react").JSX.Element;
export declare function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>): import("react").JSX.Element;
export declare function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>): import("react").JSX.Element;
export declare function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>): import("react").JSX.Element;
