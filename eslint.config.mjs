import js from "eslint-config-js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  ...pluginQuery.configs['flat/recommended'],
  {
    files: ["**/*.js", "**./*.jsx", "**./*.tsx", "**/*.ts"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parseOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
    }
  },
  prettier,
];
