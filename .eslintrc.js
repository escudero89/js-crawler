module.exports = {
  env: {
    'jest': true
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "eslint:recommended",
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb-typescript', // Add the recommend rules from airbnb
  ],
  rules: {
    // Custom rules that I like to work with
    '@typescript-eslint/semi': ['error', 'never'],
    'complexity': ['error', { 'max': 5 }],    
    'max-len': ['error', { code: 120 }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-unexpected-multiline': 'error',
    'object-curly-spacing': [2, 'always', { 'arraysInObjects': false }],
    'prefer-template': ['error'],
    'react/jsx-indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  },
}
