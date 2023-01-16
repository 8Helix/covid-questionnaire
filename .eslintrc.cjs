module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'vue/no-reserved-component-names': 'off',
    'vue/require-prop-types': 'off',
  },
};
