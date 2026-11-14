import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

// Design-system guard: styles must come from tokens, never from raw values.
// Catches hex/rgb/hsl/oklch colors and Tailwind arbitrary values like bg-[#123456], p-[13px], text-[17px].
const RAW_COLOR = String.raw`(#[0-9a-fA-F]{3,8}\b|\b(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch)\()`;
const ARBITRARY = String.raw`\b[a-z-]+-\[[^\]]*(#|px|rem|rgb|hsl|oklch)[^\]]*\]`;
const tokenRule = (message) => [
  { selector: `Literal[value=/${RAW_COLOR}/]`, message },
  { selector: `TemplateElement[value.raw=/${RAW_COLOR}/]`, message },
  { selector: `Literal[value=/${ARBITRARY}/]`, message },
  { selector: `TemplateElement[value.raw=/${ARBITRARY}/]`, message },
];

export default tseslint.config(
  { ignores: ["dist", "storybook-static", "coverage", "playground"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["bin/**/*.mjs", "scripts/**/*.{js,mjs}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/tokens/**", "src/test/**"],
    rules: {
      "no-restricted-syntax": [
        "error",
        ...tokenRule(
          "Use design tokens (bg-accent, text-muted, p-4, rounded-md...) instead of raw colors or arbitrary values. See AGENTS.md.",
        ),
      ],
    },
  },
);
