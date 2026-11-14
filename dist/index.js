import { clsx as e } from "clsx";
import { twMerge as t } from "tailwind-merge";
import { cva as n } from "class-variance-authority";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Checkbox as a, Dialog as o, Label as s, Select as c, Slot as ee, Switch as l, Tabs as u, Toast as d, Tooltip as f } from "radix-ui";
import { CheckIcon as p, ChevronDownIcon as te, MinusIcon as ne, XIcon as m } from "lucide-react";
import { useSyncExternalStore as h } from "react";
// src/lib/utils.ts
function g(...n) {
	return t(e(n));
}
// src/components/badge/badge.tsx
var _ = n("inline-flex w-fit shrink-0 items-center gap-1 rounded-sm px-2 py-0.5 text-sm font-semibold whitespace-nowrap [&_svg]:size-3", {
	variants: { variant: {
		neutral: "bg-control text-text-muted",
		accent: "bg-accent-subtle text-accent-text",
		success: "bg-success-subtle text-success-text",
		warning: "bg-warning-subtle text-warning-text",
		danger: "bg-danger-subtle text-danger-text"
	} },
	defaultVariants: { variant: "neutral" }
});
function re({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ r("span", {
		"data-slot": "badge",
		className: g(_({ variant: t }), e),
		...n
	});
}
// src/components/button/button.tsx
var v = n([
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
function ie({ className: e, variant: t, size: n, asChild: i = !1, type: a, ...o }) {
	let s = i ? ee.Root : "button";
	return /* @__PURE__ */ r(s, {
		"data-slot": "button",
		className: g(v({
			variant: t,
			size: n
		}), e),
		type: i ? a : a ?? "button",
		...o
	});
}
// src/components/card/card.tsx
function y({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card",
		className: g("flex flex-col gap-4 rounded-lg border border-border-subtle bg-surface py-5 text-text shadow-sm", e),
		...t
	});
}
function b({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-header",
		className: g("grid gap-1 px-5", e),
		...t
	});
}
function x({ className: e, ...t }) {
	return /* @__PURE__ */ r("h3", {
		"data-slot": "card-title",
		className: g("text-lg leading-tight font-semibold", e),
		...t
	});
}
function S({ className: e, ...t }) {
	return /* @__PURE__ */ r("p", {
		"data-slot": "card-description",
		className: g("text-sm text-text-muted", e),
		...t
	});
}
function C({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-content",
		className: g("px-5", e),
		...t
	});
}
function w({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "card-footer",
		className: g("flex items-center gap-3 px-5", e),
		...t
	});
}
// src/components/checkbox/checkbox.tsx
function T({ className: e, ...t }) {
	return /* @__PURE__ */ r(a.Root, {
		"data-slot": "checkbox",
		className: g("peer grid size-5 shrink-0 place-items-center rounded-sm border border-border-strong bg-surface text-on-accent", "transition-colors outline-none hover:border-accent", "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg", "data-[state=checked]:border-accent data-[state=checked]:bg-accent", "data-[state=indeterminate]:border-accent data-[state=indeterminate]:bg-accent", "aria-invalid:border-danger disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ r(a.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-items-center",
			children: t.checked === "indeterminate" ? /* @__PURE__ */ r(ne, { className: "size-3.5" }) : /* @__PURE__ */ r(p, { className: "size-3.5" })
		})
	});
}
// src/components/dialog/dialog.tsx
function E(e) {
	return /* @__PURE__ */ r(o.Root, {
		"data-slot": "dialog",
		...e
	});
}
function D(e) {
	return /* @__PURE__ */ r(o.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function O(e) {
	return /* @__PURE__ */ r(o.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function k({ className: e, children: t, showCloseButton: n = !0, ...a }) {
	return /* @__PURE__ */ i(o.Portal, { children: [/* @__PURE__ */ r(o.Overlay, {
		"data-slot": "dialog-overlay",
		className: "fixed inset-0 z-50 bg-overlay"
	}), /* @__PURE__ */ i(o.Content, {
		"data-slot": "dialog-content",
		className: g("fixed inset-x-4 top-1/2 z-50 mx-auto grid max-w-lg -translate-y-1/2 gap-4", "rounded-lg border border-border-subtle bg-surface p-6 text-text shadow-xl outline-none", e),
		...a,
		children: [t, n && /* @__PURE__ */ r(o.Close, {
			className: "absolute top-4 right-4 grid size-8 place-items-center rounded-sm text-text-muted transition-colors outline-none hover:bg-control-hover hover:text-text focus-visible:ring-2 focus-visible:ring-focus",
			"aria-label": "Close",
			children: /* @__PURE__ */ r(m, { className: "size-4" })
		})]
	})] });
}
function A({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "dialog-header",
		className: g("grid gap-2 pr-8", e),
		...t
	});
}
function j({ className: e, ...t }) {
	return /* @__PURE__ */ r("div", {
		"data-slot": "dialog-footer",
		className: g("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function M({ className: e, ...t }) {
	return /* @__PURE__ */ r(o.Title, {
		"data-slot": "dialog-title",
		className: g("text-lg leading-tight font-semibold", e),
		...t
	});
}
function N({ className: e, ...t }) {
	return /* @__PURE__ */ r(o.Description, {
		"data-slot": "dialog-description",
		className: g("text-base text-text-muted", e),
		...t
	});
}
// src/components/input/input.tsx
var P = "w-full min-w-0 rounded-md border border-border bg-surface text-base text-text placeholder:text-text-muted hover:border-border-strong transition-colors outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-focus/40 aria-invalid:border-danger aria-invalid:focus-visible:ring-danger/40 disabled:cursor-not-allowed disabled:opacity-50";
function F({ className: e, type: t = "text", ...n }) {
	return /* @__PURE__ */ r("input", {
		"data-slot": "input",
		type: t,
		className: g(P, "h-10 px-3", "file:mr-3 file:border-0 file:bg-transparent file:font-medium file:text-text", e),
		...n
	});
}
// src/components/label/label.tsx
function I({ className: e, ...t }) {
	return /* @__PURE__ */ r(s.Root, {
		"data-slot": "label",
		className: g("flex items-center gap-2 text-sm leading-none font-medium text-text select-none", "peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
// src/components/select/select.tsx
function L(e) {
	return /* @__PURE__ */ r(c.Root, {
		"data-slot": "select",
		...e
	});
}
function R(e) {
	return /* @__PURE__ */ r(c.Group, {
		"data-slot": "select-group",
		...e
	});
}
function ae(e) {
	return /* @__PURE__ */ r(c.Value, {
		"data-slot": "select-value",
		...e
	});
}
function z({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ i(c.Trigger, {
		"data-slot": "select-trigger",
		className: g(P, "flex h-10 items-center justify-between gap-2 px-3 text-left whitespace-nowrap", "data-[placeholder]:text-text-muted [&>span]:truncate", e),
		...n,
		children: [t, /* @__PURE__ */ r(c.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ r(te, { className: "size-4 shrink-0 text-text-muted" })
		})]
	});
}
function B({ className: e, children: t, position: n = "popper", ...i }) {
	return /* @__PURE__ */ r(c.Portal, { children: /* @__PURE__ */ r(c.Content, {
		"data-slot": "select-content",
		position: n,
		className: g("relative z-50 max-h-(--radix-select-content-available-height) min-w-32 overflow-hidden", "rounded-md border border-border-subtle bg-surface text-text shadow-lg", n === "popper" && "w-full min-w-(--radix-select-trigger-width) translate-y-1", e),
		...i,
		children: /* @__PURE__ */ r(c.Viewport, {
			className: "p-1",
			children: t
		})
	}) });
}
function V({ className: e, ...t }) {
	return /* @__PURE__ */ r(c.Label, {
		"data-slot": "select-label",
		className: g("px-2 py-1.5 text-sm text-text-muted", e),
		...t
	});
}
function H({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ i(c.Item, {
		"data-slot": "select-item",
		className: g("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-base outline-none select-none", "data-[highlighted]:bg-control-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
		...n,
		children: [/* @__PURE__ */ r(c.ItemText, { children: t }), /* @__PURE__ */ r("span", {
			className: "absolute right-2 grid size-4 place-items-center",
			children: /* @__PURE__ */ r(c.ItemIndicator, { children: /* @__PURE__ */ r(p, { className: "size-4 text-accent-text" }) })
		})]
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ r(c.Separator, {
		"data-slot": "select-separator",
		className: g("-mx-1 my-1 h-px bg-border-subtle", e),
		...t
	});
}
// src/components/switch/switch.tsx
function W({ className: e, ...t }) {
	return /* @__PURE__ */ r(l.Root, {
		"data-slot": "switch",
		className: g("peer inline-flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors outline-none", "bg-border-strong data-[state=checked]:bg-accent", "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg", "disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ r(l.Thumb, {
			"data-slot": "switch-thumb",
			className: "pointer-events-none block size-5 rounded-full bg-surface shadow-sm transition-transform data-[state=checked]:translate-x-4 motion-reduce:transition-none"
		})
	});
}
// src/components/tabs/tabs.tsx
function G({ className: e, ...t }) {
	return /* @__PURE__ */ r(u.Root, {
		"data-slot": "tabs",
		className: g("flex flex-col gap-4", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ r(u.List, {
		"data-slot": "tabs-list",
		className: g("flex items-center gap-1 border-b border-border-subtle", e),
		...t
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ r(u.Trigger, {
		"data-slot": "tabs-trigger",
		className: g("-mb-px inline-flex items-center gap-2 border-b-2 border-transparent px-3 py-2 text-base font-medium text-text-muted", "transition-colors outline-none hover:text-text", "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-focus", "data-[state=active]:border-accent data-[state=active]:text-text", "disabled:pointer-events-none disabled:opacity-50", e),
		...t
	});
}
function J({ className: e, ...t }) {
	return /* @__PURE__ */ r(u.Content, {
		"data-slot": "tabs-content",
		className: g("outline-none focus-visible:ring-2 focus-visible:ring-focus", e),
		...t
	});
}
// src/components/textarea/textarea.tsx
function oe({ className: e, ...t }) {
	return /* @__PURE__ */ r("textarea", {
		"data-slot": "textarea",
		className: g(P, "min-h-24 px-3 py-2", e),
		...t
	});
}
// src/components/toast/toast.tsx
var Y = [], se = 1, X = /* @__PURE__ */ new Set(), Z = () => X.forEach((e) => e()), ce = (e) => (X.add(e), () => X.delete(e));
function le(e) {
	let t = se++;
	return Y = [...Y, {
		...e,
		id: t
	}], Z(), t;
}
function Q(e) {
	Y = Y.filter((t) => t.id !== e), Z();
}
function $() {
	Y = [], Z();
}
var ue = n("relative grid gap-1 rounded-md border bg-surface p-4 pr-10 text-text shadow-lg", {
	variants: { variant: {
		neutral: "border-border-subtle",
		success: "border-success-text",
		danger: "border-danger"
	} },
	defaultVariants: { variant: "neutral" }
});
function de() {
	let e = h(ce, () => Y, () => Y);
	return /* @__PURE__ */ i(d.Provider, {
		swipeDirection: "right",
		children: [e.map(({ id: e, title: t, description: n, variant: a, duration: o = 5e3 }) => /* @__PURE__ */ i(d.Root, {
			"data-slot": "toast",
			duration: o,
			type: a === "danger" ? "foreground" : "background",
			onOpenChange: (t) => !t && Q(e),
			className: g(ue({ variant: a })),
			children: [
				/* @__PURE__ */ r(d.Title, {
					className: g("font-semibold", a === "danger" && "text-danger-text", a === "success" && "text-success-text"),
					children: t
				}),
				n && /* @__PURE__ */ r(d.Description, {
					className: "text-sm text-text-muted",
					children: n
				}),
				/* @__PURE__ */ r(d.Close, {
					"aria-label": "Dismiss",
					className: "absolute top-3 right-3 grid size-6 place-items-center rounded-sm text-text-muted outline-none hover:bg-control-hover hover:text-text focus-visible:ring-2 focus-visible:ring-focus",
					children: /* @__PURE__ */ r(m, { className: "size-4" })
				})
			]
		}, e)), /* @__PURE__ */ r(d.Viewport, { className: "fixed right-0 bottom-0 z-50 m-0 flex w-full max-w-sm list-none flex-col gap-2 p-4 outline-none" })]
	});
}
// src/components/tooltip/tooltip.tsx
function fe({ delayDuration: e = 300, ...t }) {
	return /* @__PURE__ */ r(f.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function pe(e) {
	return /* @__PURE__ */ r(f.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function me(e) {
	return /* @__PURE__ */ r(f.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function he({ className: e, sideOffset: t = 6, children: n, ...a }) {
	return /* @__PURE__ */ r(f.Portal, { children: /* @__PURE__ */ i(f.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: g("z-50 max-w-xs rounded-sm bg-text px-2 py-1 text-sm text-bg shadow-md", e),
		...a,
		children: [n, /* @__PURE__ */ r(f.Arrow, { className: "fill-text" })]
	}) });
}
export { re as Badge, ie as Button, y as Card, C as CardContent, S as CardDescription, w as CardFooter, b as CardHeader, x as CardTitle, T as Checkbox, E as Dialog, O as DialogClose, k as DialogContent, N as DialogDescription, j as DialogFooter, A as DialogHeader, M as DialogTitle, D as DialogTrigger, F as Input, I as Label, L as Select, B as SelectContent, R as SelectGroup, H as SelectItem, V as SelectLabel, U as SelectSeparator, z as SelectTrigger, ae as SelectValue, W as Switch, G as Tabs, J as TabsContent, K as TabsList, q as TabsTrigger, oe as Textarea, de as Toaster, pe as Tooltip, he as TooltipContent, fe as TooltipProvider, me as TooltipTrigger, _ as badgeVariants, v as buttonVariants, g as cn, $ as dismissAllToasts, Q as dismissToast, P as fieldClasses, le as toast };

//# sourceMappingURL=index.js.map