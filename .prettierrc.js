module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  endOfLine: 'auto',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
