export const customLoader = ({ src, width, height, quality }) => {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
    return `https://cdn.statically.io/img/damiponce.github.io/${src}?w=${width}&q=${
        quality || 75
    }`;
};
