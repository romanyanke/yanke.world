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
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
}
