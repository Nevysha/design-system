import { cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import { Toast as ToastPrimitive } from "radix-ui";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

export type ToastVariant = "neutral" | "success" | "danger";

export type ToastOptions = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  /** Milliseconds before it disappears. Default 5000. */
  duration?: number;
};

type ToastItem = ToastOptions & { id: number };

// A tiny store so `toast()` can be called from anywhere (event handlers, async code).
let items: ToastItem[] = [];
let nextId = 1;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/**
 * Show a brief, non-blocking message about something that just happened ("Project archived").
 * Requires one `<Toaster />` mounted at the app root.
 * Don't use toasts for errors the user must fix (show them next to the field) or for anything
 * that needs a decision (use a Dialog). Returns the toast id, for `dismissToast(id)`.
 */
export function toast(options: ToastOptions): number {
  const id = nextId++;
  items = [...items, { ...options, id }];
  emit();
  return id;
}

export function dismissToast(id: number) {
  items = items.filter((t) => t.id !== id);
  emit();
}

/** Remove every toast (e.g. on sign-out or route change). */
export function dismissAllToasts() {
  items = [];
  emit();
}

const toastVariants = cva(
  "relative grid gap-1 rounded-md border bg-surface p-4 pr-10 text-text shadow-lg",
  {
    variants: {
      variant: {
        neutral: "border-border-subtle",
        success: "border-success-text",
        danger: "border-danger",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

/** Renders the toasts. Mount once, near the root of the app. */
export function Toaster() {
  const list = useSyncExternalStore(subscribe, () => items, () => items);
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {list.map(({ id, title, description, variant, duration = 5000 }) => (
        <ToastPrimitive.Root
          key={id}
          data-slot="toast"
          duration={duration}
          // Errors interrupt screen readers; other toasts wait politely.
          type={variant === "danger" ? "foreground" : "background"}
          onOpenChange={(open) => !open && dismissToast(id)}
          className={cn(toastVariants({ variant }))}
        >
          <ToastPrimitive.Title className={cn("font-semibold", variant === "danger" && "text-danger-text", variant === "success" && "text-success-text")}>
            {title}
          </ToastPrimitive.Title>
          {description && <ToastPrimitive.Description className="text-sm text-text-muted">{description}</ToastPrimitive.Description>}
          <ToastPrimitive.Close
            aria-label="Dismiss"
            className="absolute top-3 right-3 grid size-6 place-items-center rounded-sm text-text-muted outline-none hover:bg-control-hover hover:text-text focus-visible:ring-2 focus-visible:ring-focus"
          >
            <XIcon className="size-4" />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport className="fixed right-0 bottom-0 z-50 m-0 flex w-full max-w-sm list-none flex-col gap-2 p-4 outline-none" />
    </ToastPrimitive.Provider>
  );
}
