module.exports = (nextConfig = {}, { nextComposePlugins, phase }) => {
  return {
    ...nextConfig,
    sentry: {
      disableServerWebpackPlugin: false,
      disableClientWebpackPlugin: false,
    },
  };
};
