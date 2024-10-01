/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/en/dashboard/default_dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
