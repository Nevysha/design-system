#!/usr/bin/env bash
# Publishes a built release of @nevysha/ui to the `release` branch and tags it v<version>.
# Apps install a tag: pnpm add github:Nevysha/design-system#v0.2.0
# Nothing is built on install, so apps need no build-script approval.
#
# Usage: pnpm release            (uses the version in package.json; bump it first)
set -euo pipefail

root="$(git rev-parse --show-toplevel)"
cd "$root"

version="$(node -p 'require("./package.json").version')"
tag="v$version"
src_sha="$(git rev-parse --short HEAD)"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Commit or stash your changes first." >&2; exit 1
fi
if git rev-parse -q --verify "refs/tags/$tag" >/dev/null || git ls-remote --exit-code --tags origin "$tag" >/dev/null 2>&1; then
  echo "Tag $tag already exists. Bump the version in package.json first." >&2; exit 1
fi

pnpm check
pnpm build

work="$(mktemp -d)"
trap 'git worktree remove --force "$work" >/dev/null 2>&1 || true; rm -rf "$work"' EXIT

git fetch -q origin release 2>/dev/null || true
if git rev-parse -q --verify origin/release >/dev/null; then
  git worktree add -q -B release "$work" origin/release
else
  git worktree add -q --detach "$work"
  git -C "$work" checkout -q --orphan release
fi

# Replace the release branch content with the built package.
git -C "$work" rm -rqf --ignore-unmatch . >/dev/null
git -C "$work" clean -fdxq
cp -r dist skills bin AGENTS.md README.md "$work"/
node -e '
  const p = require("./package.json");
  delete p.scripts; delete p.devDependencies; delete p.packageManager;
  require("fs").writeFileSync(process.argv[1] + "/package.json", JSON.stringify(p, null, 2) + "\n");
' "$work"

git -C "$work" add -A
git -C "$work" commit -q -m "release: $tag (built from $src_sha)"
git -C "$work" tag -a "$tag" -m "@nevysha/ui $tag (built from $src_sha)"
git -C "$work" push -q origin release "$tag"
echo "Released $tag. Install with: pnpm add github:Nevysha/design-system#$tag"
