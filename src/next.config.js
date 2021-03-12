const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(jpe?g|png|svg)$/i,
            use: 'url-loader',
        });
        return config;
    },
    images: {
        domains: ['localhost'],
    },
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd
        ? 'https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/'
        : '',
};
