/**
 * Design tokens as typed values, for code that needs them in JavaScript (charts, canvas, emails).
 * In components, use the Tailwind classes instead (bg-surface, text-muted, p-4, rounded-md...).
 */
import theme from "./theme.json";

export type ColorMode = "light" | "dark";
export type SemanticColor = keyof typeof theme.light.semantic;
export type ScaleName = keyof typeof theme.light.scales;

/** Semantic colors (what components use), per mode, as CSS oklch() strings. */
export const colors: Record<ColorMode, Record<SemanticColor, string>> = {
  light: theme.light.semantic,
  dark: theme.dark.semantic,
};

/** Raw 12-step scales. Step 1-2 backgrounds, 3-5 controls, 6-8 borders, 9-10 solid, 11-12 text. */
export const scales: Record<ColorMode, Record<ScaleName, string[]>> = {
  light: theme.light.scales,
  dark: theme.dark.scales,
};

/** Spacing scale in px (the 4px grid scaled by density). */
export const space = theme.space;
export const radius = theme.radius;
export const fontSize = theme.fontSize;
export const fontFamily = theme.inputs.font;

/** Reference a semantic color as a CSS variable, e.g. cssVar("accent") -> "var(--ds-accent)". */
export const cssVar = (name: SemanticColor) => `var(--ds-${name})` as const;
