/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '/api/portraits/**',
            },
        ],
    },
};

export default nextConfig;
