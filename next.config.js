module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = {
  images: {
    disableStaticImages: true
  }
}

const withImages = require("next-images");
module.exports = withImages();
