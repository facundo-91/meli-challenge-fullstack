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
			},
			fontFamily: {
				navigation: "Navigation",
			},
		},
	},
	plugins: [],
};
