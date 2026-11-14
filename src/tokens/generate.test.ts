import { contrast, generateTheme, parseOklch, themeVars } from "./generate";
import theme from "./theme.json";

describe("generateTheme", () => {
  it("rebuilds the committed theme.json from its inputs (same math as the Theme Lab)", () => {
    const out = generateTheme(theme.inputs, theme.basedOn);
    expect(out).toEqual(theme);
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
    expect(vars["--text-base"]).toBe("0.875rem");
    expect(vars["--font-sans"]).toContain('"Montserrat Variable"');
  });
});
