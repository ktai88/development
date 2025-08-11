/**
 *  Copyright 2023 ASTRON
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json" },
  plugins: [
    "@typescript-eslint",
    "import",
    "no-relative-import-paths",
    "react-refresh"
  ],
  ignorePatterns: [".eslintrc.cjs", "vite*.ts", "postcss.config.js", "tailwind.config.js"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ]
      }
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: false }
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "import/namespace": ["error", { allowComputed: true }],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 124,
        "endOfLine": "auto",
        "linebreak-style": "off"
      }
    ]
  }
};
