/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "99wholesale.com",
            },
        ],
    },
};

export default nextConfig;