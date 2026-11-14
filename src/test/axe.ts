import axe from "axe-core";

/** Run axe on a rendered container and return the violations (empty array = accessible). */
export async function axeViolations(container: Element) {
  const results = await axe.run(container, {
    // jsdom can't compute colors, so contrast is checked in Storybook's a11y addon instead.
    rules: { "color-contrast": { enabled: false } },
  });
  return results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length} node(s))`);
}
