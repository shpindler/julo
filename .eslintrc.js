module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': Infinity,
      'multiline': {
        'max': Infinity,
        'allowFirstLine': true
      }
    }],
    'vue/no-v-html': 0,
    'indent': 0,
    'no-console': 0,
    'vue/singleline-html-element-content-newline': 0,
    'arrow-parens': 0,
    'vue/require-default-prop': 0
  }
}
