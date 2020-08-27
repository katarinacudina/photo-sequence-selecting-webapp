const images = require("express").Router();
const {
  insertImages,
  getAllImages,
  insertSelection,
} = require("../../queries/images");

images.get("/", getAllImages);
images.get("/updateImages", insertImages);
images.post("/insertSelection", insertSelection);

//approveaj ili disapproveaj sliku

module.exports = images;
