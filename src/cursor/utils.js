const getRelativePosition = (pageCoords, element) => {
    return {
        // x: pageCoords.x - element.offsetLeft,
        // y: pageCoords.y - element.offsetTop + window.pageYOffset
        x: pageCoords.x - element.offsetLeft,
        y: pageCoords.y - element.getBoundingClientRect().top,
    };
};

module.exports = {
    getRelativePosition,
};
