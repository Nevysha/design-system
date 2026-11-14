import { clsx as e } from "clsx";
import { twMerge as t } from "tailwind-merge";
import { cva as n } from "class-variance-authority";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Checkbox as a, Dialog as o, Label as s, Select as c, Slot as l, Switch as u, Tabs as d, Toast as f, Tooltip as p } from "radix-ui";
import { CheckIcon as m, ChevronDownIcon as ee, MinusIcon as te, XIcon as h } from "lucide-react";
import { useSyncExternalStore as g } from "react";
// src/lib/utils.ts
function _(...n) {
	return t(e(n));
}
// src/components/badge/badge.tsx
var v = n("inline-flex w-fit shrink-0 items-center gap-1 rounded-sm px-2 py-0.5 text-sm font-semibold whitespace-nowrap [&_svg]:size-3", {
	variants: { variant: {
		neutral: "bg-control text-text-muted",
		accent: "bg-accent-subtle text-accent-text",
		success: "bg-success-subtle text-success-text",
		warning: "bg-warning-subtle text-warning-text",
		danger: "bg-danger-subtle text-danger-text"
	} },
	defaultVariants: { variant: "neutral" }
});
function ne({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ r("span", {
		"data-slot": "badge",
		className: _(v({ variant: t }), e),
		...n
	});
}
// src/components/button/button.tsx
var y = n([
	"inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold",
	"transition-colors outline-none select-none",
	"focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
	"disabled:pointer-events-none disabled:opacity-50",
	"[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
], {
	variants: {
		variant: {
			primary: "bg-accent text-on-accent hover:bg-accent-hover",
			secondary: "border border-border bg-control text-text hover:bg-control-hover",
			ghost: "text-accent-text hover:bg-accent-subtle",
			danger: "bg-danger text-on-danger hover:opacity-90"
		},
		size: {
			sm: "h-8 px-3 text-sm",
			md: "h-10 px-4 text-base",
			lg: "h-12 px-6 text-lg",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function re({ className: e, variant: t, size: n, asChild: i = !1, type: a, ...o }) {
	let s = i ? l.Root : "button";
	return /* @__PURE__ */ r(s, {
		"data-slot": "button",
		className: _(y({
			variant: t,
			size: n
		}), e),
		type: i ? a : a ?? "button",
		...o
	});
}
// src/components/card/card.tsx
function b({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card",
		className: _("flex flex-col gap-4 rounded-lg border border-border-subtle bg-surface py-5 text-text shadow-sm", e),
		...t
	});
}
function x({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-header",
		className: _("grid gap-1 px-5", e),
		...t
	});
}
function S({ className: e, ...t }) {
	return /* @__PURE__ */ r("h3", {
		"data-slot": "card-title",
		className: _("text-lg leading-tight font-semibold", e),
		...t
	});
}
function C({ className: e, ...t }) {
	return /* @__PURE__ */ r("p", {
		"data-slot": "card-description",
		className: _("text-sm text-text-muted", e),
		...t
	});
}
function w({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-content",
		className: _("px-5", e),
		...t
	});
}
function T({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-footer",
		className: _("flex items-center gap-3 px-5", e),
		...t
	});
}
// src/components/checkbox/checkbox.tsx
function E({ className: e, ...t }) {
	return /* @__PURE__ */ r(a.Root, {
		"data-slot": "checkbox",
		className: _("peer grid size-5 shrink-0 place-items-center rounded-sm border border-border-strong bg-surface text-on-accent", "transition-colors outline-none hover:border-accent", "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg", "data-[state=checked]:border-accent data-[state=checked]:bg-accent", "data-[state=indeterminate]:border-accent data-[state=indeterminate]:bg-accent", "aria-invalid:border-danger disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ r(a.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-items-center",
			children: t.checked === "indeterminate" ? /* @__PURE__ */ r(te, { className: "size-3.5" }) : /* @__PURE__ */ r(m, { className: "size-3.5" })
		})
	});
}
// src/components/dialog/dialog.tsx
function D(e) {
	return /* @__PURE__ */ r(o.Root, {
		"data-slot": "dialog",
		...e
	});
}
function O(e) {
	return /* @__PURE__ */ r(o.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function k(e) {
	return /* @__PURE__ */ r(o.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function A({ className: e, children: t, showCloseButton: n = !0, ...a }) {
	return /* @__PURE__ */ i(o.Portal, { children: [/* @__PURE__ */ r(o.Overlay, {
		"data-slot": "dialog-overlay",
		className: "fixed inset-0 z-50 bg-overlay"
	}), /* @__PURE__ */ i(o.Content, {
		"data-slot": "dialog-content",
		className: _("fixed inset-x-4 top-1/2 z-50 mx-auto grid max-w-lg -translate-y-1/2 gap-4", "rounded-lg border border-border-subtle bg-surface p-6 text-text shadow-xl outline-none", e),
		...a,
		children: [t, n && /* @__PURE__ */ r(o.Close, {
			className: "absolute top-4 right-4 grid size-8 place-items-center rounded-sm text-text-muted transition-colors outline-none hover:bg-control-hover hover:text-text focus-visible:ring-2 focus-visible:ring-focus",
			"aria-label": "Close",
			children: /* @__PURE__ */ r(h, { className: "size-4" })
		})]
	})] });
}
function j({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "dialog-header",
		className: _("grid gap-2 pr-8", e),
		...t
	});
}
function M({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "dialog-footer",
		className: _("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function N({ className: e, ...t }) {
	return /* @__PURE__ */ r(o.Title, {
		"data-slot": "dialog-title",
		className: _("text-lg leading-tight font-semibold", e),
		...t
	});
}
function P({ className: e, ...t }) {
	return /* @__PURE__ */ r(o.Description, {
		"data-slot": "dialog-description",
		className: _("text-base text-text-muted", e),
		...t
	});
}
// src/components/input/input.tsx
var F = "w-full min-w-0 rounded-md border border-border bg-surface text-base text-text placeholder:text-text-muted hover:border-border-strong transition-colors outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-focus/40 aria-invalid:border-danger aria-invalid:focus-visible:ring-danger/40 disabled:cursor-not-allowed disabled:opacity-50";
function I({ className: e, type: t = "text", ...n }) {
	return /* @__PURE__ */ r("input", {
		"data-slot": "input",
		type: t,
		className: _(F, "h-10 px-3", "file:mr-3 file:border-0 file:bg-transparent file:font-medium file:text-text", e),
		...n
	});
}
// src/components/label/label.tsx
function L({ className: e, ...t }) {
	return /* @__PURE__ */ r(s.Root, {
		"data-slot": "label",
		className: _("flex items-center gap-2 text-sm leading-none font-medium text-text select-none", "peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
// src/components/select/select.tsx
function R(e) {
	return /* @__PURE__ */ r(c.Root, {
		"data-slot": "select",
		...e
	});
}
function z(e) {
	return /* @__PURE__ */ r(c.Group, {
		"data-slot": "select-group",
		...e
	});
}
function B(e) {
	return /* @__PURE__ */ r(c.Value, {
		"data-slot": "select-value",
		...e
	});
}
function V({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ i(c.Trigger, {
		"data-slot": "select-trigger",
		className: _(F, "flex h-10 items-center justify-between gap-2 px-3 text-left whitespace-nowrap", "data-[placeholder]:text-text-muted [&>span]:truncate", e),
		...n,
		children: [t, /* @__PURE__ */ r(c.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ r(ee, { className: "size-4 shrink-0 text-text-muted" })
		})]
	});
}
function H({ className: e, children: t, position: n = "popper", ...i }) {
	return /* @__PURE__ */ r(c.Portal, { children: /* @__PURE__ */ r(c.Content, {
		"data-slot": "select-content",
		position: n,
		className: _("relative z-50 max-h-(--radix-select-content-available-height) min-w-32 overflow-hidden", "rounded-md border border-border-subtle bg-surface text-text shadow-lg", n === "popper" && "w-full min-w-(--radix-select-trigger-width) translate-y-1", e),
		...i,
		children: /* @__PURE__ */ r(c.Viewport, {
			className: "p-1",
			children: t
		})
	}) });
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ r(c.Label, {
		"data-slot": "select-label",
		className: _("px-2 py-1.5 text-sm text-text-muted", e),
		...t
	});
}
function ie({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ i(c.Item, {
		"data-slot": "select-item",
		className: _("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-base outline-none select-none", "data-[highlighted]:bg-control-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
		...n,
		children: [/* @__PURE__ */ r(c.ItemText, { children: t }), /* @__PURE__ */ r("span", {
			className: "absolute right-2 grid size-4 place-items-center",
			children: /* @__PURE__ */ r(c.ItemIndicator, { children: /* @__PURE__ */ r(m, { className: "size-4 text-accent-text" }) })
		})]
	});
}
function W({ className: e, ...t }) {
	return /* @__PURE__ */ r(c.Separator, {
		"data-slot": "select-separator",
		className: _("-mx-1 my-1 h-px bg-border-subtle", e),
		...t
	});
}
// src/components/switch/switch.tsx
function G({ className: e, ...t }) {
	return /* @__PURE__ */ r(u.Root, {
		"data-slot": "switch",
		className: _("peer inline-flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors outline-none", "bg-border-strong data-[state=checked]:bg-accent", "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg", "disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ r(u.Thumb, {
			"data-slot": "switch-thumb",
			className: "pointer-events-none block size-5 rounded-full bg-surface shadow-sm transition-transform data-[state=checked]:translate-x-4 motion-reduce:transition-none"
		})
	});
}
// src/components/table/table.tsx
function K({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ r("table", {
			"data-slot": "table",
			className: _("w-full caption-bottom text-sm text-text", e),
			...t
		})
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ r("thead", {
		"data-slot": "table-header",
		className: _("[&_tr]:border-b", e),
		...t
	});
}
function J({ className: e, ...t }) {
	return /* @__PURE__ */ r("tbody", {
		"data-slot": "table-body",
		className: _("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Y({ className: e, ...t }) {
	return /* @__PURE__ */ r("tfoot", {
		"data-slot": "table-footer",
		className: _("border-t bg-control font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function ae({ className: e, ...t }) {
	return /* @__PURE__ */ r("tr", {
		"data-slot": "table-row",
		className: _("border-b border-border-subtle transition-colors hover:bg-control-hover/50 data-[state=selected]:bg-accent-subtle", e),
		...t
	});
}
function oe({ className: e, ...t }) {
	return /* @__PURE__ */ r("th", {
		"data-slot": "table-head",
		className: _("h-10 px-3 text-left align-middle font-semibold whitespace-nowrap text-text-muted", e),
		...t
	});
}
function se({ className: e, ...t }) {
	return /* @__PURE__ */ r("td", {
		"data-slot": "table-cell",
		className: _("px-3 py-2 align-middle", e),
		...t
	});
}
function ce({ className: e, ...t }) {
	return /* @__PURE__ */ r("caption", {
		"data-slot": "table-caption",
		className: _("mt-3 text-sm text-text-muted", e),
		...t
	});
}
// src/components/tabs/tabs.tsx
function le({ className: e, ...t }) {
	return /* @__PURE__ */ r(d.Root, {
		"data-slot": "tabs",
		className: _("flex flex-col gap-4", e),
		...t
	});
}
function ue({ className: e, ...t }) {
	return /* @__PURE__ */ r(d.List, {
		"data-slot": "tabs-list",
		className: _("flex items-center gap-1 border-b border-border-subtle", e),
		...t
	});
}
function de({ className: e, ...t }) {
	return /* @__PURE__ */ r(d.Trigger, {
		"data-slot": "tabs-trigger",
		className: _("-mb-px inline-flex items-center gap-2 border-b-2 border-transparent px-3 py-2 text-base font-medium text-text-muted", "transition-colors outline-none hover:text-text", "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-focus", "data-[state=active]:border-accent data-[state=active]:text-text", "disabled:pointer-events-none disabled:opacity-50", e),
		...t
	});
}
function fe({ className: e, ...t }) {
	return /* @__PURE__ */ r(d.Content, {
		"data-slot": "tabs-content",
		className: _("outline-none focus-visible:ring-2 focus-visible:ring-focus", e),
		...t
	});
}
// src/components/textarea/textarea.tsx
function pe({ className: e, ...t }) {
	return /* @__PURE__ */ r("textarea", {
		"data-slot": "textarea",
		className: _(F, "min-h-24 px-3 py-2", e),
		...t
	});
}
// src/components/toast/toast.tsx
var X = [], me = 1, Z = /* @__PURE__ */ new Set(), Q = () => Z.forEach((e) => e()), he = (e) => (Z.add(e), () => Z.delete(e));
function ge(e) {
	let t = me++;
	return X = [...X, {
		...e,
		id: t
	}], Q(), t;
}
function $(e) {
	X = X.filter((t) => t.id !== e), Q();
}
function _e() {
	X = [], Q();
}
var ve = n("relative grid gap-1 rounded-md border bg-surface p-4 pr-10 text-text shadow-lg", {
	variants: { variant: {
		neutral: "border-border-subtle",
		success: "border-success-text",
		danger: "border-danger"
	} },
	defaultVariants: { variant: "neutral" }
});
function ye() {
	let e = g(he, () => X, () => X);
	return /* @__PURE__ */ i(f.Provider, {
		swipeDirection: "right",
		children: [e.map(({ id: e, title: t, description: n, variant: a, duration: o = 5e3 }) => /* @__PURE__ */ i(f.Root, {
			"data-slot": "toast",
			duration: o,
			type: a === "danger" ? "foreground" : "background",
			onOpenChange: (t) => !t && $(e),
			className: _(ve({ variant: a })),
			children: [
				/* @__PURE__ */ r(f.Title, {
					className: _("font-semibold", a === "danger" && "text-danger-text", a === "success" && "text-success-text"),
					children: t
				}),
				n && /* @__PURE__ */ r(f.Description, {
					className: "text-sm text-text-muted",
					children: n
				}),
				/* @__PURE__ */ r(f.Close, {
					"aria-label": "Dismiss",
					className: "absolute top-3 right-3 grid size-6 place-items-center rounded-sm text-text-muted outline-none hover:bg-control-hover hover:text-text focus-visible:ring-2 focus-visible:ring-focus",
					children: /* @__PURE__ */ r(h, { className: "size-4" })
				})
			]
		}, e)), /* @__PURE__ */ r(f.Viewport, { className: "fixed right-0 bottom-0 z-50 m-0 flex w-full max-w-sm list-none flex-col gap-2 p-4 outline-none" })]
	});
}
// src/components/tooltip/tooltip.tsx
function be({ delayDuration: e = 300, ...t }) {
	return /* @__PURE__ */ r(p.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function xe(e) {
	return /* @__PURE__ */ r(p.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function Se(e) {
	return /* @__PURE__ */ r(p.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Ce({ className: e, sideOffset: t = 6, children: n, ...a }) {
	return /* @__PURE__ */ r(p.Portal, { children: /* @__PURE__ */ i(p.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: _("z-50 max-w-xs rounded-sm bg-text px-2 py-1 text-sm text-bg shadow-md", e),
		...a,
		children: [n, /* @__PURE__ */ r(p.Arrow, { className: "fill-text" })]
	}) });
}
export { ne as Badge, re as Button, b as Card, w as CardContent, C as CardDescription, T as CardFooter, x as CardHeader, S as CardTitle, E as Checkbox, D as Dialog, k as DialogClose, A as DialogContent, P as DialogDescription, M as DialogFooter, j as DialogHeader, N as DialogTitle, O as DialogTrigger, I as Input, L as Label, R as Select, H as SelectContent, z as SelectGroup, ie as SelectItem, U as SelectLabel, W as SelectSeparator, V as SelectTrigger, B as SelectValue, G as Switch, K as Table, J as TableBody, ce as TableCaption, se as TableCell, Y as TableFooter, oe as TableHead, q as TableHeader, ae as TableRow, le as Tabs, fe as TabsContent, ue as TabsList, de as TabsTrigger, pe as Textarea, ye as Toaster, xe as Tooltip, Ce as TooltipContent, be as TooltipProvider, Se as TooltipTrigger, v as badgeVariants, y as buttonVariants, _ as cn, _e as dismissAllToasts, $ as dismissToast, F as fieldClasses, ge as toast };

//# sourceMappingURL=index.js.map