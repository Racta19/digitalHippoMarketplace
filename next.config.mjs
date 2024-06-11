import withTM from 'next-transpile-modules';
import withPlugins from 'next-compose-plugins';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    console.log('Webpack configuration:', config);
	if (!isServer) {
		config.resolve.fallback = {
		  fs: false,
		  child_process: false,
		  net: false,
		  dns: false,
		  tls: false,
		  worker_threads: false,
		};
	}

    // Adding custom rule for .node files
    config.module.rules.push(
      {
        test: /\.node$/,
        use: 'node-loader',
      },
	  {
		test: /\.css$/,
      	use: ['style-loader', 'css-loader'],
      	type: 'ass  et/resource',
	  }

    );

    return config;
  },
};

export default withPlugins([withTM(['payload'])], nextConfig);