const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (nextConfig = {}, {}) => ({
  ...nextConfig,

  webpack: (config, options) => {
    // Desactivate devtools ( sourcemap are desactivate auto on production )
    config.devtool = false;

    return config;
  },
});
