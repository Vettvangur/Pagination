module.exports = ({ isProduction = false }) => {
  const productionPlugins = [
  ]
  const developmentPlugins = [
  ];
  const plugins = [
  ]
  if (isProduction) {
    return productionPlugins.concat(plugins)
  }
  return developmentPlugins.concat(plugins)
}
