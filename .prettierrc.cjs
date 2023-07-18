module.exports = {
	semi: true,
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	arrowParens: 'avoid',
	bracketSameLine: true,
	pluginSearchDirs: ['.'],
	plugins: [import('prettier-plugin-svelte')],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
