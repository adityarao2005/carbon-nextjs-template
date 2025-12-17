import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass',
    silenceDeprecations: ['legacy-js-api'],
    api: 'modern-compiler',
  },
  /* config options here */
  turbopack: {
    resolveAlias: {
      "~*": "*",
    },
  },
};

export default nextConfig;
