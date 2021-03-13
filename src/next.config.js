const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(jpe?g|png|svg)$/i,
            use: 'url-loader',
        });
        config.node = {
            fs: 'empty',
        };
        return config;
    },
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd
        ? 'https://cdn.statically.io/gh/damiponce/damiponce.github.io/gh-pages/'
        : '',
};
