const paths = require('./paths');

module.exports = {
  contentBase: paths.public,
  compress: false,
  port: 8080,
  open: false,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  disableHostCheck: true, // Temp fix: https://github.com/webpack/webpack-dev-server/issues/1604
}