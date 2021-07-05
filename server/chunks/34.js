exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 7034:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mr": function() { return /* binding */ getAllPhotos; },
/* harmony export */   "Hp": function() { return /* binding */ getAllDesigns; },
/* harmony export */   "lC": function() { return /* binding */ customLoader; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);



const sizeOf = __webpack_require__(1616);

function getAllPhotos() {
  const picsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public/images/photos'); // Get file names

  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(picsDirectory);
  const allPhotosData = fileNames.map((fileName, index) => {
    // Remove extension from file name to get id
    const id = fileName.replace(/\.(png|jpe?g|svg)$/i, ''); // Join full path of the item

    const fullPath = '/images/photos/' + fileName; // Get dimensions and ratio of item

    const dimensions = sizeOf('public/images/photos/' + fileName);
    const width = dimensions.width;
    const height = dimensions.height;
    const ratio = dimensions.orientation % 2 || dimensions.type != 'jpg' || dimensions.type == 'jpg' && dimensions.orientation == null ? width / height : height / width;
    const orientation = dimensions.orientation || null; // Combine the data and return it

    return {
      id,
      fullPath,
      width,
      height,
      ratio,
      index,
      orientation
    };
  });
  return allPhotosData;
}
function getAllDesigns() {
  const picsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'public/images/designs'); // Get file names

  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(picsDirectory);
  const allDesignsData = fileNames.map((fileName, index) => {
    // Remove extension from file name to get id
    const id = fileName.replace(/\.(png|jpe?g|svg)$/i, ''); // Join full path of the item

    const fullPath = '/images/designs/' + fileName; // Get dimensions and ratio of item

    const dimensions = sizeOf('public/images/designs/' + fileName);
    const width = dimensions.width;
    const height = dimensions.height;
    const ratio = dimensions.orientation % 2 || dimensions.type != 'jpg' || dimensions.type == 'jpg' && dimensions.orientation == null ? width / height : height / width; // Combine the data and return it

    return {
      fileName,
      id,
      fullPath,
      width,
      height,
      ratio,
      index
    };
  });
  const arr = [];

  for (let i = 0; i < allDesignsData.length; i++) {
    let tempArr = [allDesignsData[i]['fileName'], allDesignsData[i]];
    arr.push(tempArr);
  }

  return Object.fromEntries(arr);
}
const customLoader = loader => {
  // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  return `https://cdn.statically.io/img/damiponce.github.io/${loader.src}?w=${1000}&q=${loader.quality || 75}`;
};

/***/ })

};
;