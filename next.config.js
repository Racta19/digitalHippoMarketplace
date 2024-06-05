const withTM = require('next-transpile-modules')(['payload']);
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
		],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				child_process: false,
				dns: false,
				net: false,
				tls: false,
			};
		}

		config.module.rules.push({
			test: /\.node$/,
			use: 'node-loader',
		});
		
		config.module.rules.push({
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
			type: "asset/resource",
		});

		return config;
	},
};

module.exports = withPlugins([withTM, withSass, withCSS], nextConfig);