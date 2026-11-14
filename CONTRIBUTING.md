# Contributing to @nevysha/ui

This guide is for **coding agents** (and people) who use the design system in an app and find something missing or wrong. You can suggest a change, or implement it. Nevysha reviews and merges every change, and only she cuts releases.

Repo: https://github.com/Nevysha/design-system (private). Use the `gh` CLI. On Nevysha's WSL machine it is `gh.exe`, run with `< /dev/null` in scripts.

## 1. First, check that a change is really needed

Before proposing anything:

- Read the catalog in `skills/nevysha-ui/SKILL.md` and the stories in Storybook. The thing may already exist under another name, or be a composition of existing components.
- Search open issues and pull requests: `gh issue list -R Nevysha/design-system --search "<words>"` and `gh pr list -R Nevysha/design-system`.
- Ask yourself whether it is **reusable**. A design-system change must make sense for more than one screen. One-off layouts and app-specific widgets stay in the app, built from existing components and tokens.

In the meantime, unblock your app without breaking the rules: compose existing components, style with tokens only, and leave a `// TODO(@nevysha/ui): <issue link>` comment where the system should take over later.

## 2. Choose: suggest or implement

| Situation | Do this |
|---|---|
| A bug in a component (wrong behavior, accessibility issue, broken style) | Implement the fix (pull request) |
| A missing variant, prop or state on an existing component | Implement it (pull request) |
| A new component | Open an issue first ("Component proposal"), implement after Nevysha agrees |
| A token or theme change (colors, spacing, radius, type, font) | Issue only. These are Nevysha's design decisions |
| A breaking change (renamed or removed props, changed defaults) | Issue only |
| Unsure | Open an issue |

## 3. Suggest a change (issue)

```sh
gh issue create -R Nevysha/design-system --template component-proposal.md   # or change-request.md
```

A good issue gives:

- **The need**, from the app's point of view: what the user is trying to do, and which app and screen (a file path is fine).
- **Why existing components don't cover it**: what you tried.
- **The proposal**: name, props/variants, and a short usage example in TSX.
- **Accessibility**: roles, keyboard behavior, what a screen reader announces.

## 4. Implement a change (pull request)

1. **Get the repo** and work on a branch, never on `main`:
   ```sh
   gh repo clone Nevysha/design-system && cd design-system
   git switch -c feat/<component>-<short-description>    # or fix/...
   pnpm install
   ```
2. **Follow `AGENTS.md`**: the styling rules, and the "Adding a component" recipe, with `src/components/button/` as the model. In short:
   - component with a JSDoc "when to use / when not to"
   - tests (behavior, keyboard, `className` merge, `axeViolations()` returns `[]`)
   - stories with realistic content
   - export from `src/index.ts`, and add it to the catalog in `skills/nevysha-ui/SKILL.md`
3. **Respect the design decisions** listed at the end of `AGENTS.md`. Don't change tokens, `theme.json`, the font or the type scale in a pull request.
4. **Run `pnpm check`** (typecheck + lint + tests) until it passes. Run `pnpm build-storybook` if you touched stories.
5. **Commit** with Conventional Commits and a scope: `feat(select): add clearable option`, `fix(dialog): return focus on close`.
6. **Open the pull request**:
   ```sh
   git push -u origin HEAD
   gh pr create -R Nevysha/design-system --fill
   ```
   Fill in the template: what changed, why (link the issue or the app that needs it), how you tested it.

**Don't**:

- push to `main`
- run `pnpm release`, bump the version, or create tags
- bypass the ESLint token rule (no `eslint-disable` for `no-restricted-syntax`)
- add dependencies without saying why in the pull request

## 5. After the merge

Nevysha releases a new version (`pnpm release <bump>`). Then, in the app:

```sh
pnpm add github:Nevysha/design-system#v<new-version>
pnpm exec nevysha-ui-skill    # refresh the skill
```

Replace the temporary code you marked with `TODO(@nevysha/ui)`.
