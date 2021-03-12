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
};
