import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const read = (p: string) => readFileSync(resolve(__dirname, p), "utf8");

describe("Tailwind entry (theme.css)", () => {
  const theme = read("theme.css");
  const pkg = JSON.parse(read("../package.json"));

  it("brings the tokens and scans the components, without Tailwind itself", () => {
    expect(theme).toContain('@import "./tokens/theme.css"');
    expect(theme).toContain('@source "./"');
    expect(theme).not.toMatch(/^@import "tailwindcss"/m);
  });

  it("is what styles.css is made from", () => {
    expect(read("styles.css")).toContain('@import "./theme.css"');
  });

  it("is exported and copied to dist with the tokens it imports", () => {
    expect(pkg.exports["./theme.css"]).toBe("./dist/theme.css");
    expect(pkg.scripts.build).toContain("cp src/theme.css dist/theme.css");
    expect(pkg.scripts.build).toContain("cp src/tokens/theme.css dist/tokens/theme.css");
  });
});
