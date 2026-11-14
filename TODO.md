# TODO

- [ ] Theme Lab: the "compact" density gives half-pixel spacing (3.5px unit). Decide whether to round to whole pixels.
- [ ] Visual review of every story in light and dark (Storybook `pnpm dev`): automated screenshots aren't set up yet.
- [ ] Ship a Tailwind entry (`@nevysha/ui/theme.css`) so apps using Tailwind themselves get the same tokens and utilities, and can `@source` the components.
- [ ] Check that the Storybook MCP addon works with Claude Code (`claude mcp add` against http://localhost:6006/mcp).
- [ ] Move back to TypeScript 7 when typescript-eslint supports it (stays on 6.x for now; it refused TS 7.0 on 2026-11-14).
- [ ] CI (GitHub Actions): `pnpm check` and `pnpm build-storybook` on every push.
- [ ] More components when an app needs them: RadioGroup, DropdownMenu, Popover, Table, Avatar, Skeleton, Combobox.
