//const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
   
  },
  reactStrictMode: "true",
});

const { withPlugins } = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// next.js configuration
const nextConfig = {
  images: {
    // sizes: [320, 480, 820, 1200, 1600],
    domains: [
      "s3.amazonaws.com",
      "scontent.cdninstagram.com",
      "images-na.ssl-images-amazon.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
