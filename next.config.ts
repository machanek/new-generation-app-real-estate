import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Usunięcie konfliktów z Turbopack
  experimental: {
    // Wyłączenie Turbopack dla kompatybilności z Payload
  },
  
  // TypeScript - tymczasowo ignoruj błędy
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack konfiguracja
  webpack: (config, { isServer }) => {
    // Externalizuj sharp tylko na serwerze
    if (isServer) {
      config.externals.push('sharp');
    }
    
    // Dodaj alias dla lepszej kompatybilności
    config.resolve.alias = {
      ...config.resolve.alias,
      '@payloadcms/next': '@payloadcms/next',
    };
    
    return config;
  },
  
  // Dla Netlify deployment
  output: 'standalone',
  
  // Redirects usunięte - Payload CMS ma własny routing
};

export default withPayload(nextConfig);
