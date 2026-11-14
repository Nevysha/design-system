export type ToastVariant = "neutral" | "success" | "danger";
export type ToastOptions = {
    title: string;
    description?: string;
    variant?: ToastVariant;
    /** Milliseconds before it disappears. Default 5000. */
    duration?: number;
};
/**
 * Show a brief, non-blocking message about something that just happened ("Project archived").
 * Requires one `<Toaster />` mounted at the app root.
 * Don't use toasts for errors the user must fix (show them next to the field) or for anything
 * that needs a decision (use a Dialog). Returns the toast id, for `dismissToast(id)`.
 */
export declare function toast(options: ToastOptions): number;
export declare function dismissToast(id: number): void;
/** Remove every toast (e.g. on sign-out or route change). */
export declare function dismissAllToasts(): void;
/** Renders the toasts. Mount once, near the root of the app. */
export declare function Toaster(): import("react").JSX.Element;
