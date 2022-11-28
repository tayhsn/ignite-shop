/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,

   images: {
      domains: ['files.stripe.com'],
   },

   env: {
      NEXT_URL: process.env.PORT ?? 'http://localhost:3000',
   },
};

module.exports = nextConfig;
