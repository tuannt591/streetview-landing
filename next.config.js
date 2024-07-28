/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  async headers() {
    return [
      {
        // Áp dụng cache-control cho tài nguyên chính (HTML) của trang
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate', // Thiết lập max-age cho phép caching trong 1 giờ
          },
        ],
      },
      // Các cài đặt khác...
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
  },
};

module.exports = nextConfig;
