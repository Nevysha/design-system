import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card";
import { Textarea } from "../components/textarea";
import { contrast, generateTheme, parseOklch, themeVars, type ThemeInputs, type ThemeJson } from "../tokens/generate";
import current from "../tokens/theme.json";
import { Dashboard } from "./dashboard";

// Montserrat ships with the design system; the others load from Google Fonts, in Storybook only.
const FONTS = ["Montserrat", "Inter", "IBM Plex Sans", "Nunito", "Manrope", "DM Sans", "Source Sans 3", "Bricolage Grotesque"];

function useGoogleFont(font: string) {
  useEffect(() => {
    if (font === "Montserrat") return;
    const id = `playground-font-${font.replace(/\s+/g, "-")}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, "+")}:wght@400;500;600;700&display=swap`;
    document.head.appendChild(link);
  }, [font]);
}

// Set the theme's variables on <html>, so dialogs, selects and toasts (rendered at the end of
// <body>) get them too. Inline styles win over theme.css; removed when leaving the story.
function useThemeVars(theme: ThemeJson, mode: "light" | "dark") {
  useEffect(() => {
    const vars = themeVars(theme, mode);
    const style = document.documentElement.style;
    for (const [k, v] of Object.entries(vars)) style.setProperty(k, v);
    return () => {
      for (const k of Object.keys(vars)) style.removeProperty(k);
    };
  }, [theme, mode]);
}

const CHECKS = [
  ["Body text on cards", "text", "surface", 4.5],
  ["Muted text on cards", "text-muted", "surface", 4.5],
  ["Muted text on the page", "text-muted", "bg", 4.5],
  ["Accent text (links)", "accent-text", "surface", 4.5],
  ["Label on primary button", "on-accent", "accent", 4.5],
  ["Label on danger button", "on-danger", "danger", 4.5],
  ["Error text", "danger-text", "surface", 4.5],
  ["Focus ring", "focus", "surface", 3],
  ["Input border (low on purpose)", "border", "surface", 3],
] as const;

function changes(inputs: ThemeInputs) {
  return (Object.keys(inputs) as (keyof ThemeInputs)[])
    .filter((k) => inputs[k] !== current.inputs[k])
    .map((k) => `${k}: ${current.inputs[k]} → ${inputs[k]}`);
}

function Panel({ theme, mode }: { theme: ThemeJson; mode: "light" | "dark" }) {
  const json = JSON.stringify(theme, null, 2);
  const [copied, setCopied] = useState("");
  const diff = changes(theme.inputs);
  const sem = theme[mode].semantic;

  async function copy() {
    try {
      await navigator.clipboard.writeText(json);
      setCopied("Copied. Paste it to Claude.");
    } catch {
      setCopied("Copy blocked by the browser: copy it from the box below.");
    }
    setTimeout(() => setCopied(""), 4000);
  }

  return (
    <Card className="mx-auto mb-8 max-w-5xl">
      <CardHeader>
        <CardTitle>Theme playground</CardTitle>
        <CardDescription>
          Change the controls in the panel below the canvas (Controls tab). Everything on this page follows, dialogs and
          toasts included. Switch light / dark with the theme button in the toolbar. When you like it, copy the theme and
          give it to Claude.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 sm:grid-cols-2">
        <div className="grid content-start gap-2">
          <h4 className="font-semibold">Changes from the current theme</h4>
          {diff.length === 0 ? (
            <p className="text-text-muted">None yet: this is the theme the design system ships.</p>
          ) : (
            <ul className="grid gap-1">
              {diff.map((d) => <li key={d}><code>{d}</code></li>)}
            </ul>
          )}
        </div>
        <div className="grid content-start gap-2">
          <h4 className="font-semibold">Contrast ({mode})</h4>
          <ul className="grid gap-1">
            {CHECKS.map(([label, fg, bg, need]) => {
              const r = contrast(parseOklch(sem[fg]!), parseOklch(sem[bg]!));
              return (
                <li key={label} className="flex items-center justify-between gap-2">
                  <span>{label}</span>
                  <span className="flex items-center gap-2">
                    <span className="text-text-muted">{r.toFixed(2)} / {need}</span>
                    <Badge variant={r >= need ? "success" : fg === "border" ? "warning" : "danger"}>{r >= need ? "pass" : fg === "border" ? "low" : "fail"}</Badge>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-wrap">
        <Button onClick={copy}>Copy theme.json</Button>
        <span role="status" className="text-text-muted">{copied}</span>
        <details className="w-full">
          <summary className="cursor-pointer text-text-muted">Show the JSON</summary>
          <Textarea readOnly aria-label="theme.json" value={json} rows={12} className="mt-2 font-mono text-sm" />
        </details>
      </CardFooter>
    </Card>
  );
}

function ThemePlayground({ mode, ...inputs }: ThemeInputs & { mode: "light" | "dark" }) {
  const key = JSON.stringify(inputs);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild only when an input changes
  const theme = useMemo(() => generateTheme(inputs, current.basedOn), [key]);
  useThemeVars(theme, mode);
  useGoogleFont(inputs.font);
  return (
    <>
      <Panel theme={theme} mode={mode} />
      <Dashboard />
    </>
  );
}

/**
 * Tweak the theme's inputs and see the whole design system follow. The values start from the
 * current theme (src/tokens/theme.json). "Copy theme.json" gives the result to paste to Claude,
 * who saves it and runs `pnpm tokens`.
 */
const meta = {
  title: "Playground/Theme",
  component: ThemePlayground,
  parameters: {
    layout: "padded",
    // Contrast can fail while experimenting: show it in the panel instead of failing the story.
    a11y: { test: "todo" },
    controls: { expanded: true, sort: "none" },
  },
  args: { ...current.inputs },
  argTypes: {
    mode: { table: { disable: true } },
    hue: { control: { type: "range", min: 0, max: 360, step: 1 }, description: "Brand color around the color wheel: 25 red, 75 amber, 150 green, 255 blue, 308 violet." },
    chroma: { control: { type: "range", min: 0, max: 0.37, step: 0.005 }, description: "How colorful the brand is. 0 is gray." },
    brandLightness: { control: { type: "range", min: 0.4, max: 0.8, step: 0.01 }, description: "Lightness of buttons and solid brand fills. Above ~0.65 the button label turns dark." },
    neutralTint: { control: { type: "range", min: 0, max: 0.05, step: 0.002 }, description: "How much of the brand hue the grays carry. 0 is pure gray." },
    radius: { control: { type: "range", min: 0, max: 20, step: 1 }, description: "Corner radius of controls, in px (cards and dialogs get 1.5×)." },
    density: {
      control: { type: "select", labels: { 0.75: "tight (3px)", 0.875: "compact (3.5px)", 1: "comfortable (4px)", 1.125: "roomy (4.5px)", 1.25: "spacious (5px)" } },
      options: [0.75, 0.875, 1, 1.125, 1.25],
      description: "The spacing unit: every padding and gap is a multiple of it.",
    },
    font: { control: { type: "select" }, options: FONTS, description: "Only Montserrat ships today; picking another means adding its package." },
    typeRatio: {
      control: { type: "select", labels: { 1.125: "1.125 (subtle)", 1.2: "1.2", 1.25: "1.25 (current)", 1.333: "1.333 (bold)" } },
      options: [1.125, 1.2, 1.25, 1.333],
      description: "Each text size is the previous one × this ratio.",
    },
    baseSize: { control: { type: "range", min: 12, max: 18, step: 0.5 }, description: "Body text size, in px." },
  },
  render: (args, { globals }) => <ThemePlayground {...args} mode={globals.theme === "dark" ? "dark" : "light"} />,
} satisfies Meta<typeof ThemePlayground>;
export default meta;

export const Theme: StoryObj<typeof meta> = { args: { mode: "light" } };
