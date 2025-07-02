import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 1. sassOptionsを追加
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "_variables.scss"; @import "_mixins.scss";`,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // 以前追加したローカルDirectus用の設定
      {
        protocol: "http",
        hostname: "localhost",
        port: "8055",
        pathname: "/assets/**",
      },

      {
        protocol: "https",
        hostname: "ososhiki.kinpoudou.co.jp",
        port: "",
        pathname: "/wp/wp-content/themes/ososhiki/img/**", // 画像が置かれているパス（/**は全許可）
      },
    ],
  },
};

export default nextConfig;
