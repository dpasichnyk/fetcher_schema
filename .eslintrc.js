module.exports = {
  extends: [
    'airbnb',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "arrow-body-style": ["error", "always"],
    "no-restricted-syntax": ["error", "WithStatement"],
    "class-methods-use-this": "off",
    "arrow-body-style": ["error", "as-needed"],
    "no-param-reassign": ["error", { "props": false }],
    "import/no-cycle": "off",
    "max-len": ["error", { "code": 120 }]
  },
  env: {
    jest: true,
  },
};
