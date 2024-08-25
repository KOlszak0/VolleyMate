/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFB200',
				secondary: '#284776',
				bgColor: '#9FC4FD',
				dark: '#303941',
			},
			fontFamily: {
				russoRegular: ['RussoOne-Regular', 'sans-serif'],
				montMedium: ['Montserrat-Medium', 'sans-serif'],
				montBold: ['Montserrat-Bold', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
