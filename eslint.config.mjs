import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    './nx/**',
    './pnpm-lock.yaml',
    '**/node_modules/**',
    '**/dist/**',
  ],
  formatters: true,
}, {
  rules: {
    'object-curly-newline': ['warn', {
      multiline: true,
      minProperties: 3,
    }],
  },
})
