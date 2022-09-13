/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Proxima Nova"],
		},
		screens: {
			xs: "450px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				"meli-yellow": "#FFF159",
				"meli-blue": "#3483FA",
				"dark-primary": "#1a1a1a",
				"dark-secundary": "#222222",
				"dark-links": "#e6bb5d",
				"dark-text": "#adbac7",
			},
			fontFamily: {
				navigation: "Navigation",
			},
		},
	},
	plugins: [],
};
