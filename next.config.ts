import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/servicos", destination: "/analytics", permanent: true },
      { source: "/sobre", destination: "/about", permanent: true },
      { source: "/contato", destination: "/#contact", permanent: true },
      { source: "/privacidade", destination: "/privacy", permanent: true },
      { source: "/termos", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
