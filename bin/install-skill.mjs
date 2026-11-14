#!/usr/bin/env node
// Copies the nevysha-ui Claude skill into the current project: ./.claude/skills/nevysha-ui/SKILL.md
// Usage (in an app that depends on @nevysha/ui):  pnpm exec nevysha-ui-skill
import { cpSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const source = resolve(dirname(fileURLToPath(import.meta.url)), "../skills/nevysha-ui");
const target = join(process.cwd(), ".claude", "skills", "nevysha-ui");
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
console.log(`Installed the nevysha-ui skill in ${target}`);
console.log("Re-run after updating @nevysha/ui to refresh it.");
