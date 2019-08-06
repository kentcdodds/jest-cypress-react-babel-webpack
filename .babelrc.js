const isProd = String(process.env.NODE_ENV) === 'production'

module.exports = {
  presets: [
    ['@babel/preset-env', {modules: false}],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
