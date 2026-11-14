/**
 * Design tokens as typed values, for code that needs them in JavaScript (charts, canvas, emails).
 * In components, use the Tailwind classes instead (bg-surface, text-muted, p-4, rounded-md...).
 */
import theme from "./theme.json";
export type ColorMode = "light" | "dark";
export type SemanticColor = keyof typeof theme.light.semantic;
export type ScaleName = keyof typeof theme.light.scales;
/** Semantic colors (what components use), per mode, as CSS oklch() strings. */
export declare const colors: Record<ColorMode, Record<SemanticColor, string>>;
/** Raw 12-step scales. Step 1-2 backgrounds, 3-5 controls, 6-8 borders, 9-10 solid, 11-12 text. */
export declare const scales: Record<ColorMode, Record<ScaleName, string[]>>;
/** Spacing scale in px (the 4px grid scaled by density). */
export declare const space: number[];
export declare const radius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
};
export declare const fontSize: {
    sm: number;
    base: number;
    lg: number;
    xl: number;
    "2xl": number;
};
export declare const fontFamily: string;
/** Reference a semantic color as a CSS variable, e.g. cssVar("accent") -> "var(--ds-accent)". */
export declare const cssVar: (name: SemanticColor) => "var(--ds-accent)" | "var(--ds-danger)" | "var(--ds-text)" | "var(--ds-border)" | "var(--ds-bg)" | "var(--ds-surface)" | "var(--ds-control)" | "var(--ds-control-hover)" | "var(--ds-border-subtle)" | "var(--ds-border-strong)" | "var(--ds-text-muted)" | "var(--ds-accent-hover)" | "var(--ds-accent-subtle)" | "var(--ds-accent-text)" | "var(--ds-on-accent)" | "var(--ds-focus)" | "var(--ds-on-danger)" | "var(--ds-danger-subtle)" | "var(--ds-danger-text)" | "var(--ds-success-subtle)" | "var(--ds-success-text)" | "var(--ds-warning-subtle)" | "var(--ds-warning-border)" | "var(--ds-warning-text)";
