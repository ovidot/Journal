/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["as2.ftcdn.net", "as2.ftcdn.net", "lh3.googleusercontent.com"],
  },
};

(module.exports = nextConfig),
  {
    experimental: { appDir: true },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };
