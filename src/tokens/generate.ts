// The theme generator: turns a few inputs (hue, chroma, radius, density...) into the full
// theme.json (12-step OKLCH scales, semantic colors, spacing, radius, type scale).
// Same math as the Theme Lab (playground/theme-lab.html); the Storybook playground uses it live.
// Not part of the published library.

export type ThemeInputs = {
  hue: number; // brand hue, 0-360
  chroma: number; // brand colorfulness, 0-0.37
  brandLightness: number; // lightness of the solid brand color (step 9)
  neutralTint: number; // how much of the brand hue the grays carry
  radius: number; // md radius in px
  density: number; // spacing unit = 4px × density
  font: string;
  typeRatio: number; // each text size = the previous one × ratio
  baseSize: number; // text-base in px
};

type Mode = { scales: Record<string, string[]>; semantic: Record<string, string> };
export type ThemeJson = {
  source: string;
  basedOn: string;
  inputs: ThemeInputs;
  space: number[];
  radius: { sm: number; md: number; lg: number; full: number };
  fontSize: Record<"sm" | "base" | "lg" | "xl" | "2xl", number>;
  light: Mode;
  dark: Mode;
};

type Color = { L: number; C: number; H: number; Y: number; css: string };
type ModeName = "light" | "dark";

function oklchToLinear(L: number, C: number, H: number): [number, number, number] {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

// Lower the chroma until the color fits in sRGB, so what we show is what screens can display.
function fit(L: number, C: number, H: number) {
  let c = C;
  for (let i = 0; i < 30; i++) {
    if (oklchToLinear(L, c, H).every((v) => v >= -0.0005 && v <= 1.0005)) break;
    c *= 0.93;
  }
  return color(L, c, H);
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function color(L: number, C: number, H: number): Color {
  const [r, g, b] = oklchToLinear(L, C, H).map(clamp01) as [number, number, number];
  return {
    L,
    C,
    H,
    Y: 0.2126 * r + 0.7152 * g + 0.0722 * b,
    css: `oklch(${(L * 100).toFixed(1)}% ${C.toFixed(3)} ${H.toFixed(0)})`,
  };
}

/** WCAG contrast ratio between two colors (4.5 for text, 3 for UI shapes). */
export function contrast(a: Color, b: Color) {
  const [hi, lo] = a.Y > b.Y ? [a.Y, b.Y] : [b.Y, a.Y];
  return (hi + 0.05) / (lo + 0.05);
}

/** Parses the `oklch(L% C H)` strings this generator writes. */
export function parseOklch(css: string): Color {
  const m = /oklch\(([\d.]+)% ([\d.]+) ([\d.]+)\)/.exec(css);
  if (!m) throw new Error(`Not an oklch() color: ${css}`);
  return color(Number(m[1]) / 100, Number(m[2]), Number(m[3]));
}

const LIGHT_L = [0.993, 0.982, 0.962, 0.938, 0.91, 0.876, 0.826, 0.752, 0, 0, 0.505, 0.255];
const DARK_L = [0.165, 0.198, 0.242, 0.278, 0.314, 0.356, 0.41, 0.488, 0, 0, 0.79, 0.945];
const CMUL = [0.06, 0.13, 0.27, 0.4, 0.5, 0.58, 0.68, 0.84, 1, 1, 0.88, 0.42];

function scale(H: number, C: number, L9: number, mode: ModeName, neutral = false): Color[] {
  const Ls = mode === "light" ? LIGHT_L : DARK_L;
  return Ls.map((L, i) => {
    let l = L;
    if (i === 8) l = L9;
    if (i === 9) l = mode === "light" ? L9 - 0.045 : L9 + 0.045;
    if (neutral && (i === 8 || i === 9)) l = i === 8 ? (mode === "light" ? 0.56 : 0.6) : mode === "light" ? 0.51 : 0.66;
    if (neutral && i === 10) l = mode === "light" ? 0.48 : 0.76;
    const c = neutral ? C * (i < 8 ? 0.6 + 0.08 * i : 1) : C * CMUL[i]!;
    return fit(l, c, H);
  });
}

function buildMode(s: ThemeInputs, mode: ModeName): Mode {
  const sc = {
    brand: scale(s.hue, s.chroma, s.brandLightness, mode),
    neutral: scale(s.hue, s.neutralTint, 0.56, mode, true),
    success: scale(150, 0.15, 0.6, mode),
    warning: scale(75, 0.16, 0.79, mode),
    danger: scale(25, 0.19, 0.58, mode),
  };
  const n = (i: number) => sc.neutral[i]!;
  const b = (i: number) => sc.brand[i]!;
  const white = color(1, 0, 0);
  const ink = fit(0.2, Math.min(0.04, s.chroma * 0.3), s.hue);
  // Label color on a solid fill: white or near-black, whichever contrasts more.
  const onFor = (solid: Color) => (contrast(white, solid) >= contrast(ink, solid) ? white : ink);
  const sem: Record<string, Color> = {
    bg: mode === "light" ? n(1) : n(0),
    surface: mode === "light" ? white : n(1),
    control: n(2),
    "control-hover": n(3),
    "border-subtle": n(5),
    border: n(6),
    "border-strong": n(7),
    text: n(11),
    "text-muted": n(10),
    accent: b(8),
    "accent-hover": b(9),
    "accent-subtle": b(2),
    "accent-text": b(10),
    "on-accent": onFor(b(8)),
    focus: b(8),
    danger: sc.danger[8]!,
    "on-danger": onFor(sc.danger[8]!),
    "danger-subtle": sc.danger[2]!,
    "danger-text": sc.danger[10]!,
    "success-subtle": sc.success[2]!,
    "success-text": sc.success[10]!,
    "warning-subtle": sc.warning[2]!,
    "warning-border": sc.warning[6]!,
    "warning-text": sc.warning[10]!,
  };
  return {
    scales: Object.fromEntries(Object.entries(sc).map(([k, v]) => [k, v.map((c) => c.css)])),
    semantic: Object.fromEntries(Object.entries(sem).map(([k, v]) => [k, v.css])),
  };
}

const round1 = (v: number) => +v.toFixed(1);

/** Builds the full theme.json from the inputs. `pnpm tokens` then turns it into theme.css. */
export function generateTheme(inputs: ThemeInputs, basedOn = "Slate"): ThemeJson {
  const u = 4 * inputs.density;
  const r = inputs.radius;
  const { baseSize: base, typeRatio: k } = inputs;
  return {
    source: "Theme Lab",
    basedOn,
    inputs,
    space: [1, 2, 3, 4, 5, 6, 8, 12, 16].map((m) => round1(u * m)),
    radius: { sm: Math.max(0, Math.round(r * 0.6)), md: r, lg: Math.round(r * 1.5), full: 9999 },
    fontSize: {
      sm: round1(base / k),
      base: round1(base),
      lg: round1(base * k),
      xl: round1(base * k ** 2),
      "2xl": round1(base * k ** 3),
    },
    light: buildMode(inputs, "light"),
    dark: buildMode(inputs, "dark"),
  };
}

/** The dimmed backdrop behind dialogs (also written by scripts/build-tokens.ts). */
export const overlayFor = (hue: number, mode: ModeName) =>
  mode === "light" ? `oklch(20% 0.02 ${hue} / 0.45)` : "oklch(0% 0 0 / 0.6)";

/**
 * The CSS variables a theme sets, for applying a theme at runtime (the Storybook playground).
 * Mirrors what scripts/build-tokens.ts writes into theme.css.
 */
export function themeVars(theme: ThemeJson, mode: ModeName): Record<string, string> {
  const { inputs } = theme;
  const vars: Record<string, string> = {};
  for (const [k, v] of Object.entries(theme[mode].semantic)) vars[`--ds-${k}`] = v;
  vars["--ds-overlay"] = overlayFor(inputs.hue, mode);
  vars["--spacing"] = `${4 * inputs.density}px`;
  vars["--radius-sm"] = `${theme.radius.sm}px`;
  vars["--radius-md"] = `${theme.radius.md}px`;
  vars["--radius-lg"] = `${theme.radius.lg}px`;
  for (const [k, v] of Object.entries(theme.fontSize)) vars[`--text-${k}`] = `${v / 16}rem`;
  vars["--font-sans"] = fontStack(inputs.font);
  return vars;
}

export const fontStack = (font: string) =>
  `"${font} Variable", "${font}", ui-sans-serif, system-ui, sans-serif`;
