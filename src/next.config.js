const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    typescript: {
        ignoreBuildErrors: false,
    },
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        config.module.rules.push({
            test: /\.(jpe?g|png|svg)$/i,
            use: 'url-loader',
        });
        return config;
    },
    // Set placeholder loader for exporting to static HTML
    images: { loader: 'cloudinary', domains: ['localhost'] },
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd
        ? 'https://cdn.statically.io/gh/damiponce/damiponce.github.io/gh-pages/'
        : '',
    // Set custom directory build.
    // distDir: 'out',
};
