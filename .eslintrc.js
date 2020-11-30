module.exports = {
  env: { browser: true, es6: true },
  settings: { react: { version: 'detect' } },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 2018, sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'eol-last': ['error', 'always'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'no-empty-pattern': ['warn'],
    'import/order': ['warn', { groups: ['external', 'builtin', 'sibling', 'index'] }],
    'import/newline-after-import': ['warn'],
    'no-console': ['warn', { allow: ['error'] }],
    'react/self-closing-comp': ['warn'],
    'newline-before-return': ['warn'],
    'no-case-declarations': ['off'],
    'prefer-template': ['warn'],
    'object-shorthand': ['warn', 'always'],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
}
