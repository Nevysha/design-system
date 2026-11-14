import { contrast, generateTheme, parseOklch, themeVars, type ThemeInputs } from "./generate";
import theme from "./theme.json";

// Input border contrast on cards, light mode.
const on3 = (t: ReturnType<typeof generateTheme>) => contrast(parseOklch(t.light.semantic.border!), parseOklch(t.light.semantic.surface!));

describe("generateTheme", () => {
  it("rebuilds the committed theme.json from its inputs (same math as the Theme Lab)", () => {
    const out = generateTheme(theme.inputs, theme.basedOn);
    expect(out).toEqual(theme);
  });

  it("strengthens borders and changes the focus ring on request", () => {
    const base = generateTheme(theme.inputs as ThemeInputs);
    const t = generateTheme({ ...(theme.inputs as ThemeInputs), borderContrast: 0.16, focusColor: "brand-text" });
    for (const mode of ["light", "dark"] as const) {
      const on = (g: typeof t, k: string) => contrast(parseOklch(g[mode].semantic[k]!), parseOklch(g[mode].semantic.surface!));
      expect(on(t, "border")).toBeGreaterThan(on(base, "border"));
      expect(t[mode].semantic.focus).toBe(t[mode].semantic["accent-text"]);
    }
    expect(on3(t)).toBeGreaterThanOrEqual(3);
  });

  it("keeps text readable for other hues too", () => {
    for (const hue of [25, 150, 255]) {
      const t = generateTheme({ ...theme.inputs, hue });
      for (const mode of ["light", "dark"] as const) {
        const s = t[mode].semantic;
        expect(contrast(parseOklch(s.text!), parseOklch(s.surface!))).toBeGreaterThan(4.5);
        expect(contrast(parseOklch(s["on-accent"]!), parseOklch(s.accent!))).toBeGreaterThan(4.5);
      }
    }
  });

  it("produces the CSS variables theme.css defines", () => {
    const vars = themeVars(generateTheme(theme.inputs), "dark");
    expect(vars["--ds-bg"]).toBe(theme.dark.semantic.bg);
    expect(vars["--spacing"]).toBe("3px");
    expect(vars["--text-base"]).toBe("0.9375rem");
    expect(vars["--font-sans"]).toContain('"Montserrat Variable"');
  });
});
