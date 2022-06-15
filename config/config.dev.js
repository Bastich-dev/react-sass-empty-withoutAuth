const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      // Control of source-maps  ( https://webpack.js.org/configuration/devtool/#devtool )
      config.devtool = "source-map";

      return config;
    },
  };
};
