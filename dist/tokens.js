var e = {
	source: "Theme Lab",
	basedOn: "Slate",
	inputs: {
		hue: 308,
		chroma: .25,
		brandLightness: .53,
		neutralTint: .04,
		radius: 4,
		density: .75,
		font: "Montserrat",
		typeRatio: 1.25,
		baseSize: 14
	},
	space: [
		3,
		6,
		9,
		12,
		15,
		18,
		24,
		36,
		48
	],
	radius: {
		sm: 2,
		md: 4,
		lg: 6,
		full: 9999
	},
	fontSize: {
		sm: 11.2,
		base: 14,
		lg: 17.5,
		xl: 21.9,
		"2xl": 27.3
	},
	light: {
		scales: {
			brand: [
				"oklch(99.3% 0.004 308)",
				"oklch(98.2% 0.011 308)",
				"oklch(96.2% 0.023 308)",
				"oklch(93.8% 0.036 308)",
				"oklch(91.0% 0.056 308)",
				"oklch(87.6% 0.075 308)",
				"oklch(82.6% 0.110 308)",
				"oklch(75.2% 0.157 308)",
				"oklch(53.0% 0.250 308)",
				"oklch(48.5% 0.233 308)",
				"oklch(50.5% 0.220 308)",
				"oklch(25.5% 0.105 308)"
			],
			neutral: [
				"oklch(99.3% 0.004 308)",
				"oklch(98.2% 0.011 308)",
				"oklch(96.2% 0.023 308)",
				"oklch(93.8% 0.034 308)",
				"oklch(91.0% 0.037 308)",
				"oklch(87.6% 0.040 308)",
				"oklch(82.6% 0.043 308)",
				"oklch(75.2% 0.046 308)",
				"oklch(56.0% 0.040 308)",
				"oklch(51.0% 0.040 308)",
				"oklch(48.0% 0.040 308)",
				"oklch(25.5% 0.040 308)"
			],
			success: [
				"oklch(99.3% 0.009 150)",
				"oklch(98.2% 0.019 150)",
				"oklch(96.2% 0.041 150)",
				"oklch(93.8% 0.060 150)",
				"oklch(91.0% 0.075 150)",
				"oklch(87.6% 0.087 150)",
				"oklch(82.6% 0.102 150)",
				"oklch(75.2% 0.126 150)",
				"oklch(60.0% 0.150 150)",
				"oklch(55.5% 0.150 150)",
				"oklch(50.5% 0.132 150)",
				"oklch(25.5% 0.063 150)"
			],
			warning: [
				"oklch(99.3% 0.005 75)",
				"oklch(98.2% 0.013 75)",
				"oklch(96.2% 0.030 75)",
				"oklch(93.8% 0.048 75)",
				"oklch(91.0% 0.074 75)",
				"oklch(87.6% 0.093 75)",
				"oklch(82.6% 0.109 75)",
				"oklch(75.2% 0.134 75)",
				"oklch(79.0% 0.160 75)",
				"oklch(74.5% 0.149 75)",
				"oklch(50.5% 0.105 75)",
				"oklch(25.5% 0.054 75)"
			],
			danger: [
				"oklch(99.3% 0.003 25)",
				"oklch(98.2% 0.008 25)",
				"oklch(96.2% 0.019 25)",
				"oklch(93.8% 0.030 25)",
				"oklch(91.0% 0.046 25)",
				"oklch(87.6% 0.062 25)",
				"oklch(82.6% 0.097 25)",
				"oklch(75.2% 0.148 25)",
				"oklch(58.0% 0.190 25)",
				"oklch(53.5% 0.190 25)",
				"oklch(50.5% 0.167 25)",
				"oklch(25.5% 0.080 25)"
			]
		},
		semantic: {
			bg: "oklch(98.2% 0.011 308)",
			surface: "oklch(100.0% 0.000 0)",
			control: "oklch(96.2% 0.023 308)",
			"control-hover": "oklch(93.8% 0.034 308)",
			"border-subtle": "oklch(87.6% 0.040 308)",
			border: "oklch(82.6% 0.043 308)",
			"border-strong": "oklch(75.2% 0.046 308)",
			text: "oklch(25.5% 0.040 308)",
			"text-muted": "oklch(48.0% 0.040 308)",
			accent: "oklch(53.0% 0.250 308)",
			"accent-hover": "oklch(48.5% 0.233 308)",
			"accent-subtle": "oklch(96.2% 0.023 308)",
			"accent-text": "oklch(50.5% 0.220 308)",
			"on-accent": "oklch(100.0% 0.000 0)",
			focus: "oklch(53.0% 0.250 308)",
			danger: "oklch(58.0% 0.190 25)",
			"on-danger": "oklch(100.0% 0.000 0)",
			"danger-subtle": "oklch(96.2% 0.019 25)",
			"danger-text": "oklch(50.5% 0.167 25)",
			"success-subtle": "oklch(96.2% 0.041 150)",
			"success-text": "oklch(50.5% 0.132 150)",
			"warning-subtle": "oklch(96.2% 0.030 75)",
			"warning-border": "oklch(82.6% 0.109 75)",
			"warning-text": "oklch(50.5% 0.105 75)"
		}
	},
	dark: {
		scales: {
			brand: [
				"oklch(16.5% 0.015 308)",
				"oklch(19.8% 0.033 308)",
				"oklch(24.2% 0.068 308)",
				"oklch(27.8% 0.100 308)",
				"oklch(31.4% 0.125 308)",
				"oklch(35.6% 0.145 308)",
				"oklch(41.0% 0.170 308)",
				"oklch(48.8% 0.210 308)",
				"oklch(53.0% 0.250 308)",
				"oklch(57.5% 0.250 308)",
				"oklch(79.0% 0.132 308)",
				"oklch(94.5% 0.033 308)"
			],
			neutral: [
				"oklch(16.5% 0.024 308)",
				"oklch(19.8% 0.027 308)",
				"oklch(24.2% 0.030 308)",
				"oklch(27.8% 0.034 308)",
				"oklch(31.4% 0.037 308)",
				"oklch(35.6% 0.040 308)",
				"oklch(41.0% 0.043 308)",
				"oklch(48.8% 0.046 308)",
				"oklch(60.0% 0.040 308)",
				"oklch(66.0% 0.040 308)",
				"oklch(76.0% 0.040 308)",
				"oklch(94.5% 0.032 308)"
			],
			success: [
				"oklch(16.5% 0.009 150)",
				"oklch(19.8% 0.019 150)",
				"oklch(24.2% 0.041 150)",
				"oklch(27.8% 0.060 150)",
				"oklch(31.4% 0.075 150)",
				"oklch(35.6% 0.087 150)",
				"oklch(41.0% 0.102 150)",
				"oklch(48.8% 0.126 150)",
				"oklch(60.0% 0.150 150)",
				"oklch(64.5% 0.150 150)",
				"oklch(79.0% 0.132 150)",
				"oklch(94.5% 0.063 150)"
			],
			warning: [
				"oklch(16.5% 0.010 75)",
				"oklch(19.8% 0.021 75)",
				"oklch(24.2% 0.043 75)",
				"oklch(27.8% 0.060 75)",
				"oklch(31.4% 0.064 75)",
				"oklch(35.6% 0.075 75)",
				"oklch(41.0% 0.081 75)",
				"oklch(48.8% 0.101 75)",
				"oklch(79.0% 0.160 75)",
				"oklch(83.5% 0.138 75)",
				"oklch(79.0% 0.141 75)",
				"oklch(94.5% 0.043 75)"
			],
			danger: [
				"oklch(16.5% 0.011 25)",
				"oklch(19.8% 0.025 25)",
				"oklch(24.2% 0.051 25)",
				"oklch(27.8% 0.076 25)",
				"oklch(31.4% 0.095 25)",
				"oklch(35.6% 0.110 25)",
				"oklch(41.0% 0.129 25)",
				"oklch(48.8% 0.160 25)",
				"oklch(58.0% 0.190 25)",
				"oklch(62.5% 0.190 25)",
				"oklch(79.0% 0.116 25)",
				"oklch(94.5% 0.027 25)"
			]
		},
		semantic: {
			bg: "oklch(16.5% 0.024 308)",
			surface: "oklch(19.8% 0.027 308)",
			control: "oklch(24.2% 0.030 308)",
			"control-hover": "oklch(27.8% 0.034 308)",
			"border-subtle": "oklch(35.6% 0.040 308)",
			border: "oklch(41.0% 0.043 308)",
			"border-strong": "oklch(48.8% 0.046 308)",
			text: "oklch(94.5% 0.032 308)",
			"text-muted": "oklch(76.0% 0.040 308)",
			accent: "oklch(53.0% 0.250 308)",
			"accent-hover": "oklch(57.5% 0.250 308)",
			"accent-subtle": "oklch(24.2% 0.068 308)",
			"accent-text": "oklch(79.0% 0.132 308)",
			"on-accent": "oklch(100.0% 0.000 0)",
			focus: "oklch(53.0% 0.250 308)",
			danger: "oklch(58.0% 0.190 25)",
			"on-danger": "oklch(100.0% 0.000 0)",
			"danger-subtle": "oklch(24.2% 0.051 25)",
			"danger-text": "oklch(79.0% 0.116 25)",
			"success-subtle": "oklch(24.2% 0.041 150)",
			"success-text": "oklch(79.0% 0.132 150)",
			"warning-subtle": "oklch(24.2% 0.043 75)",
			"warning-border": "oklch(41.0% 0.081 75)",
			"warning-text": "oklch(79.0% 0.141 75)"
		}
	}
}, t = {
	light: e.light.semantic,
	dark: e.dark.semantic
}, n = {
	light: e.light.scales,
	dark: e.dark.scales
}, r = e.space, i = e.radius, a = e.fontSize, o = e.inputs.font, s = (e) => `var(--ds-${e})`;
export { t as colors, s as cssVar, o as fontFamily, a as fontSize, i as radius, n as scales, r as space };

//# sourceMappingURL=tokens.js.map