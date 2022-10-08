const { getColorFromURL } = require('color-thief-node');

(async () => {
    const dominantColor = await getColorFromURL(imageURL);
})();
