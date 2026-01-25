const baseLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

const baseRules = {
  'no-unused-vars': 'warn',
  'no-console': 'warn',
  'prefer-const': 'warn',
};

const tsParser = (() => {
  try {
    return require('@typescript-eslint/parser');
  } catch (error) {
    return null;
  }
})();

module.exports = [
  ...(tsParser
    ? []
    : [
        {
          ignores: ['**/*.{ts,tsx}'],
        },
      ]),
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: baseLanguageOptions,
    rules: baseRules,
  },
  ...(tsParser
    ? [
        {
          files: ['**/*.{ts,tsx}'],
          languageOptions: {
            ...baseLanguageOptions,
            parser: tsParser,
          },
          rules: baseRules,
        },
      ]
    : []),
];
