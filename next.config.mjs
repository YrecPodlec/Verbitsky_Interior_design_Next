
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
    env: {
        NEXT_PUBLIC_PROJECTS: process.env.NEXT_PUBLIC_PROJECTS,
    },
};

export default withNextIntl(nextConfig);
