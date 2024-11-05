/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'verbitsky-design-server.vercel.app',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
