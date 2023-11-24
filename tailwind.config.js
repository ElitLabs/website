/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				quicksand: ['Quicksand', 'sans-serif'],
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			colors: {
				mainDarkBG: '#0d0d0e',
				mainLightBG: '#f5f5f5',
				brand: '#E7183F',
			},
			fontSize: {
				'8.5xl': '7rem',
			},
			backgroundSize: {
				'200%': '200%',
				'350%': '350%',
				'500%': '500%',
				'1000%' : '1000%',
			},
			screens: {
				'2xl': '1440px',
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '3840px',
				'6xl': '5120px',
			},
			animation: {
				gradient: 'gradient 15s linear infinite',
				sgradient: 'gradient 30s linear infinite',
				cursor: 'cursorblink 1.5s step-end infinite',
			},
			keyframes: {
				gradient: {
					from: { 'background-position': '0%' },
					to: { 'background-position': '400%' },
				},
				cursorblink: {
					'from, to': {
					  opacity: 0
					},
					'50%': {
					  opacity: 1
					}
				},
			},
			borderWidth: {
				1: '1px',
			},
			backgroundImage: {
				PYBlob: "url('./assets/PYBlob.svg')",
				JSBlob: "url('./assets/JSBlob.svg')",
				HTMLBlob: "url('./assets/HTMLBlob.svg')",
			},
			dropShadow: {
				card: '0px 5px 6px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
