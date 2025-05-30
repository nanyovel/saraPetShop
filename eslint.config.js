module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    // "react/prop-types": "off",
    // "no-multi-spaces": "error",
    // "indent": ["error", 2],
    // "no-trailing-spaces": "error",
    // "semi": ["error", "always"],
    // "no-multiple-empty-lines": ["error", { "max": 1 }]
    

  },
}



// import js from '@eslint/js'
// import globals from 'globals'
// import react from 'eslint-plugin-react'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

// export default [
//   { ignores: ['dist'] },
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     settings: { react: { version: '18.3' } },
//     plugins: {
//       react,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       // ...js.configs.recommended.rules,
//       // ...react.configs.recommended.rules,
//       // ...react.configs['jsx-runtime'].rules,
//       // ...reactHooks.configs.recommended.rules,
//       // 'react/jsx-no-target-blank': 'on',
//       // 'react-refresh/only-export-components': [
//       //   'warn',
//       //   { allowConstantExport: true },
//       // ],
//     },
//   },
// ]
