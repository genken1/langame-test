import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      '@stylistic/js': stylisticJs
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', "single"],
    },
  },
)
