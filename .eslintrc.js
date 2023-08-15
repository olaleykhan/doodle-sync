module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'xo',
		'plugin:react/recommended',
		'plugin:jest-dom/recommended',
		'react-app/jest',
		'plugin:testing-library/react',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'jest-dom',
		'testing-library',
	],
	rules: {
		// 'import/no-relative-parent-imports': 'error',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
};
