import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Diğer ayarlar burada olacak
  images: {
    domains: ['localhost', 'example.com'],
  },
};

export default withNextIntl(nextConfig);