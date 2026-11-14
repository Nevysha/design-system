# TODO

- [ ] Theme: violet (hue 308) + Montserrat applied on 2026-11-14 from the Theme Lab export ("so far"); re-export and run `pnpm tokens` if it changes.
- [ ] Type: base 14px with ratio 1.25 makes `text-sm` 11.2px, below the usual 12px minimum for readable text. Decide whether to raise it.
- [ ] Theme Lab: the "compact" density gives half-pixel spacing (3.5px unit). Decide whether to round to whole pixels.
- [ ] Components: Input, Label, Textarea, Checkbox, Switch, Select, Card, Badge, Dialog, Tooltip, Tabs, Toast (follow `src/components/button/`).
- [ ] Agent layer: Claude skill for apps that use the design system; usage notes in each component's JSDoc; check the Storybook MCP addon works with Claude Code.
- [ ] Ship a Tailwind entry (`@nevysha/ui/theme.css`) so apps using Tailwind get the same tokens and utilities.
- [ ] Distribution: private GitHub repo, install as a git dependency. Check how pnpm builds git-hosted packages (prepare script, `allowBuilds`) or ship `dist/` another way.
- [ ] Move back to TypeScript 7 when typescript-eslint supports it (stays on 6.x for now; it refused TS 7.0 on 2026-11-14).
- [ ] CI (GitHub Actions): `pnpm check` and `pnpm build-storybook` on every push.
