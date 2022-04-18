module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false
            }
          }
        }
      }]
    });

    return config;
  }

}
