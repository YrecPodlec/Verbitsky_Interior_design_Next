// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_PROJECTS: process.env.NEXT_PUBLIC_PROJECTS,
    },
};

export default nextConfig;
