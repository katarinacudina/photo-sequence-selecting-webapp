const path = require("path");
const fs = require("fs");

//joining path of directory
const listImages = async () => {
  const directoryPath = path.join(__dirname, "../../public/images");

  return readImages(directoryPath)
    .then((files) => createImageList(files, directoryPath))
    .then((imageArray) => imageArray);
};
const readImages = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, async (err, files) => {
      //handling error
      if (err) {
        reject('"Unable to scan directory: " + err');
      }
      resolve(files);
    });
  });
};
const createImageList = (files, directoryPath) => {
  let imageArray = [];
  return new Promise((resolve, reject) => {
    for (const file of files) {
      imageArray.push({ image_name: file, image_path: directoryPath });
    }
    resolve(imageArray);
  });
};

module.exports = { listImages };
