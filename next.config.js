const withTM = require('next-transpile-modules')(['payload']);
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withTM], {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        dns:false,
        net: false,
        tls: false,
      };
    }

    config.module.rules.push({
        test: /\.node$/,
        use: 'file-loader',
      });

    return config;
  },
});