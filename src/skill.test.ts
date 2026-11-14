import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import * as api from "./index";

describe("nevysha-ui skill", () => {
  const skill = readFileSync(resolve(__dirname, "../skills/nevysha-ui/SKILL.md"), "utf8");

  it.each(Object.keys(api))("documents the export %s", (name) => {
    expect(skill).toContain(`\`${name}\``);
  });
});
