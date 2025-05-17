/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Add valid Next.js config options here
};

module.exports = nextConfig;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
