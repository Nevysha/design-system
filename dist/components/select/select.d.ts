import { Select as SelectPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
/**
 * Pick one option from a list of about 5 to 15. For 2 to 4 options, consider showing them all
 * (radio buttons or Tabs). For long lists, use a searchable combobox.
 * Give the trigger an `id` and a `Label` with `htmlFor` (or an `aria-label`).
 *
 * ```tsx
 * <Select defaultValue="eu">
 *   <SelectTrigger id="region"><SelectValue /></SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="eu">Europe (Frankfurt)</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 */
export declare function Select(props: ComponentProps<typeof SelectPrimitive.Root>): import("react").JSX.Element;
export declare function SelectGroup(props: ComponentProps<typeof SelectPrimitive.Group>): import("react").JSX.Element;
export declare function SelectValue(props: ComponentProps<typeof SelectPrimitive.Value>): import("react").JSX.Element;
export declare function SelectTrigger({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger>): import("react").JSX.Element;
export declare function SelectContent({ className, children, position, ...props }: ComponentProps<typeof SelectPrimitive.Content>): import("react").JSX.Element;
export declare function SelectLabel({ className, ...props }: ComponentProps<typeof SelectPrimitive.Label>): import("react").JSX.Element;
export declare function SelectItem({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Item>): import("react").JSX.Element;
export declare function SelectSeparator({ className, ...props }: ComponentProps<typeof SelectPrimitive.Separator>): import("react").JSX.Element;
