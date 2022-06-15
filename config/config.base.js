const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  async redirects() {
    return [
      //   {
      //     source: "/fr/",
      //     destination: "/",
      //     permanent: true,
      //   },
    ];
  },

  // Environnement variables
  env: nextConfig.env,

  // Minification
  swcMinify: true,

  // Trailing slash at the end of urls ( https://nextjs.org/docs/api-reference/next.config.js/trailing-slash )
  trailingSlash: false,

  // Don't create sourcemaps on production
  productionBrowserSourceMaps: false,

  // Ignore typescript validation types
  //   typescript: {
  //     ignoreBuildErrors: true,
  //   },

  webpack: (config, options) => {
    // Unknown use
    // config.node = {
    //   fs: "empty",
    //   module: "empty",
    // }

    // Loader svg in public
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: [
    //     {
    //       loader: "file-loader",
    //       options: {
    //         name: "[name].[ext]",
    //         publicPath: "/_next/static/images/",
    //         outputPath: "static/images/",
    //         inlineImageLimit: -1,
    //       },
    //     },
    //   ],
    // })

    // Css plugin for SSR : Client
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/[name].[hash].css",
        chunkFilename: "static/[id].[hash].css",
        // ignoreOrder: true,
      })
    );

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: false },
          },
          "sass-loader",
        ],
      },
    ];

    return config;
  },
});
