module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'],
  root: true,
  rules: {
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { minProperties: 3, multiline: true },
        ImportDeclaration: 'never',
        ObjectExpression: { multiline: true },
        ObjectPattern: { multiline: true },
      },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: { react: 'react' },
          value: { react: ['react', 'react-*'] },
        },
        groups: [
          'type',
          'react',
          'external',
          'builtin',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'internal-pattern': ['@/**', '@@/**'],
        'newlines-between': 'ignore',
        order: 'asc',
        type: 'natural',
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    quotes: ['error', 'double'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    react: { version: '18.2' },
  },
};
