module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    "@typescript-eslint/explicit-function-return-type": "warn"
  },
  settings: {
    react: {
      version: "detect",
    },
  },

}
