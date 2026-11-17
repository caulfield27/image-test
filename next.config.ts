import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires non-default qualities to be whitelisted explicitly.
    qualities: [75, 90, 100],
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "humo.tj",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "192.168.145.27",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  staticPageGenerationTimeout: 180,
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
