/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				SUSE: ['SUSE', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
