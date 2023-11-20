module.exports = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: 'tailwind.config.js',

	bracketSameLine: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	filepath: 'src/**/*{.js,.jsx,.ts,.tsx,.css,.scss,.html,.json,.md}',
	printWidth: 80,
};
