import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'unicorn/prefer-node-protocol': 'off',
  },
})
