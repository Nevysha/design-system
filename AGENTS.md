# AGENTS.md: @nevysha/ui

Nevysha's React design system. Rules for any coding agent working **in** this repo or **using** it in an app.

## Using it in an app

Install a released tag: `pnpm add github:Nevysha/design-system#v0.1.0` (never `main`: it isn't built), then `pnpm exec nevysha-ui-skill` to copy the Claude skill into the app (`.claude/skills/nevysha-ui/`).

```tsx
import "@nevysha/ui/font.css"; // once, at the app root: Montserrat
import "@nevysha/ui/styles.css"; // once, at the app root: tokens + component styles
import { Button } from "@nevysha/ui";
```

- Use the components before writing your own markup. Check Storybook (`pnpm dev`, or the MCP server below) for what exists.
- Dark mode: put `class="dark"` (or `data-theme="dark"`) on `<html>`.
- App runs Tailwind v4 itself? In its CSS, `@import "tailwindcss";` then `@import "@nevysha/ui/theme.css";` instead of `styles.css`: the app's own classes get the same tokens.
- Need a token value in JS (charts, canvas)? `import { colors, cssVar } from "@nevysha/ui/tokens"`.

### Missing something or found a bug?

Read [CONTRIBUTING.md](CONTRIBUTING.md): when to suggest a change (issue) and when to implement it (pull request), and how.

## Styling rules (enforced by ESLint)

- **Only semantic tokens.** The default Tailwind palette is removed: `bg-blue-500` does not exist.
  - Backgrounds: `bg-bg` (page), `bg-surface` (cards, inputs), `bg-control` / `bg-control-hover`.
  - Text: `text-text`, `text-muted` (`text-text-muted`), `text-accent-text`, `text-danger-text`.
  - Borders: `border-border-subtle`, `border-border`, `border-border-strong`.
  - Brand: `bg-accent`, `hover:bg-accent-hover`, `text-on-accent`, `bg-accent-subtle`, `ring-focus`.
  - Status: `danger`, `on-danger`, `danger-subtle`, `danger-text`, `success-subtle`, `success-text`, `warning-subtle`, `warning-border`, `warning-text`.
- **Spacing on the grid:** `p-1`...`p-16`, `gap-*`, `m-*` (one unit = 4px × density). No `p-[13px]`.
- **Radius:** `rounded-sm`, `rounded-md` (default for controls), `rounded-lg` (cards, dialogs), `rounded-full` (pills, avatars).
- **Type:** `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`. One font family (`font-sans`).
- No hex/rgb/oklch literals and no arbitrary values (`bg-[#...]`, `text-[17px]`). If a value is missing, add a token; don't hard-code it.

## Working in this repo

- Stack: React 19, TypeScript (strict), Tailwind v4, Radix (`radix-ui`), class-variance-authority, Vite (library mode), Vitest + Testing Library + axe, Storybook 10. Package manager: **pnpm**.
- `pnpm check`: typecheck + lint + tests. Run it before every commit.
- `pnpm dev`: Storybook on http://localhost:6006 (MCP endpoint for agents: http://localhost:6006/mcp).
- `pnpm build`: library to `dist/`. `pnpm release patch|minor|major`: bump, then publish a built version to the `release` branch + tag. `pnpm tokens`: regenerate `src/tokens/theme.css` from `src/tokens/theme.json`. `src/theme.css` is the Tailwind entry (tokens + dark variant + base) shipped as `@nevysha/ui/theme.css`; `src/styles.css` is Tailwind + that entry, compiled.
- Tokens: `src/tokens/theme.json` is the source of truth (exported from the Theme Lab in `playground/`). `theme.css` is generated: never edit it by hand.

### Adding a component

Follow `src/components/button/` exactly:

1. `src/components/<name>/<name>.tsx`: shadcn-style. Radix primitive if behavior is non-trivial (focus, keyboard, portals), `cva` for variants, `cn()` to merge `className`, `data-slot="<name>"`, props extend the native element's props.
2. A JSDoc block on the component: **when to use it, when not to**, and accessibility requirements. This is what agents read.
3. `<name>.test.tsx`: behavior (roles, keyboard, callbacks), variants, `className` merge, and an `axeViolations()` check that must return `[]`.
4. `<name>.stories.tsx`: `tags: ["autodocs"]`, one story per variant/state, realistic content (no lorem ipsum).
5. `index.ts` in the folder, and export it from `src/index.ts`.
6. Add every new export to the catalog in `skills/nevysha-ui/SKILL.md` (a test fails otherwise). That skill is what agents in apps read.

### Commits and releases

Conventional Commits with a scope: `feat(button): ...`, `fix(tokens): ...`, `docs(agents): ...`.

**Every push to `main` is followed by a release** (Nevysha's rule), so apps can pick up the change right away. After pushing, run `pnpm release <bump>`: `patch` for fixes and docs, `minor` for new components, variants or props, `major` for breaking changes. It bumps the version, commits, pushes `main`, runs the checks, and publishes the built release and its tag.

This applies to sessions working on `main` for Nevysha. Contributors working through pull requests don't release (see CONTRIBUTING.md); Nevysha releases after merging.

## Design decisions (don't "fix" these)

- Theme: violet brand (hue 308) and Montserrat, chosen by Nevysha on 2026-11-14 in the Theme Lab.
- Type: base 14px, ratio 1.25 (`text-sm` is 11.2px). Kept on purpose.
- Input borders (`border`) are below 3:1 contrast on purpose. Don't darken them.
