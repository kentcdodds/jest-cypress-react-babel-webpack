const isProd = String(process.env.NODE_ENV) === 'production'

module.exports = {
  presets: [['@babel/preset-env', {modules: false}], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'babel-plugin-emotion',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
    'react-loadable/babel',
  ].filter(Boolean),
}
