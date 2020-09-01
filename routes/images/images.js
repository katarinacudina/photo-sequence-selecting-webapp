const images = require("express").Router();
const {
  insertImages,
  getAllImages,
  getPendingImages,
  insertSelection,
  reviewImage,
  getApprovedImages,
} = require("../../queries/images");

images.get("/getApprovedImages", getApprovedImages);
images.get("/:review_state", getPendingImages);
images.get("/", getAllImages);
images.get("/updateImages", insertImages);
images.post("/insertSelection", insertSelection);
images.post("/reviewImage", reviewImage);

//approveaj ili disapproveaj sliku

module.exports = images;
