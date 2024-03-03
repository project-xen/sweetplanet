/** @type {import('tailwindcss').Config}*/

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				head: ['Geologica', 'system-ui', 'sans-serif'],
				body: ['Lora', 'Vollkorn', 'Cambria']
			}
		}
	}
};

module.exports = config;
