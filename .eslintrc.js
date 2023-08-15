module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [

		'xo',
		'plugin:react/recommended',
		'plugin:jest-dom/recommended',
		'react-app/jest',
	],
	'overrides': [
		{
			files: ['**/*.ts', '**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json',
			},
		},
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
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'projext': './tsconfig.json',
	},
	plugins: [
		'react',
		"@typescript-eslint",
		'jest-dom',
	],
	rules: {
		// 'import/no-relative-parent-imports': 'error',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-use-before-define": [
			"error"
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				"ignoreRestSiblings": true
			}
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				"checksConditionals": false,
				"checksVoidReturn": {
					"arguments": false,
					"attributes": false
				}
			}
		],



	},
};
