const paths = require('./paths');
const path = require('path');


module.exports = ({
  isProduction = false,
}) => {
  const typescript = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'ts-loader',
    },],
  };

  return [typescript];
}
