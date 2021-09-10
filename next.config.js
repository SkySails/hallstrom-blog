const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "media.graphcms.com",
      "navigraph.com",
    ],
  },
};
