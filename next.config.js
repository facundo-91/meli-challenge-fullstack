/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["http2.mlstatic.com"],
	},
	experimental: {
		images: {
			unoptimized: true,
		},
	},
};

module.exports = nextConfig;
