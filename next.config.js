const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/scoreway", // 👈 this is important
  assetPrefix: "/scoreway",
};

module.exports = nextConfig;
