import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@openhospi/shared",
    "@openhospi/supabase",
    "@openhospi/surfconext",
    "@openhospi/crypto",
  ],
};

export default nextConfig;
