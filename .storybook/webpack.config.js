module.exports = (baseConfig, env, config) => {
  // Transpile Gatsby module because Gastby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader')

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
  ]

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'awesome-typescript-loader',
    exclude: [/node_modules\/(?!(gatsby)\/)/],
    options: {
      useBabel: true,
      babelOptions: {
        babelrc: false,
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'babel-plugin-remove-graphql-queries',
        ],
      },
      babelCore: '@babel/core',
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
