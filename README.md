# @nevysha/ui

Nevysha's React design system: design tokens, accessible components, and Storybook docs, built to be easy for coding agents to use correctly.

## Install (in an app)

From the private GitHub repo (your git credentials must have access):

```sh
pnpm add github:Nevysha/design-system          # latest main
pnpm add github:Nevysha/design-system#v0.1.0   # a tagged version (recommended)
pnpm exec nevysha-ui-skill                     # copy the Claude skill into this app
```

pnpm builds the package on install (`prepack`). If pnpm asks to approve the build, allow `@nevysha/ui`.

```tsx
import "@nevysha/ui/font.css";
import "@nevysha/ui/styles.css";
import { Button } from "@nevysha/ui";

<Button variant="primary">Create project</Button>;
```

## Develop

Requires Node (latest LTS) and pnpm, from mise on this machine.

```sh
pnpm install
pnpm dev          # Storybook on http://localhost:6006
pnpm check        # typecheck + lint + unit tests
pnpm build        # library to dist/
pnpm tokens       # regenerate CSS from src/tokens/theme.json
```

## How it fits together

- **Tokens:** `src/tokens/theme.json` holds every design decision (colors for light and dark, spacing, radius, type). It is exported from the **Theme Lab** (`playground/theme-lab.html`). `pnpm tokens` turns it into CSS variables and a Tailwind theme.
- **Components:** `src/components/*`, shadcn-style (Radix + Tailwind + cva), each with tests and stories.
- **Agents:** `skills/nevysha-ui/SKILL.md` is the Claude skill for apps (catalog + rules + patterns); `AGENTS.md` has the rules for this repo; ESLint blocks raw colors and arbitrary values; Storybook exposes an MCP server.
