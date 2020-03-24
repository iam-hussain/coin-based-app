const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    });

    return config;
  }
})

module.exports = {
  cssModules: true,
  
};