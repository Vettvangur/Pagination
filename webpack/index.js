const paths = require('./paths');
const plugins = require('./plugins');
const resolve = require('./resolve');
const rules = require('./rules');

module.exports = (env = {
  production: false,
}) => {
  const isProduction = env && env.production;

  const config = {
    isProduction,
  };
  return {
    entry: ['./src/Pagination.tsx'],

    output: {
      path: paths.build,
      filename: isProduction ? '[name].min.js' : '[name].js',
      chunkFilename: isProduction ? '[name].[chunkhash:6].js' : '[name].js',
    },

    devtool: isProduction ? 'cheap-module-source-map' : 'eval-source-map',

    mode: isProduction ? 'production' : 'development',

    module: {
      rules: rules(config),
    },

    plugins: plugins(config),

    resolve,


    watch: !isProduction,
  }
}