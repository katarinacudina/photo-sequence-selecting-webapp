const images = require("express").Router();
const {
  insertImages,
  getAllImages,
  getPendingImages,
  insertSelection,
  reviewImage,
  getApprovedImages,
  getImagesForUser,
  getRejectedImages,
} = require("../../queries/images");

images.get("/getImagesForUser/:user_id", getImagesForUser);
images.get("/getApprovedImages", getApprovedImages);
images.get("/getRejectedImages/:user_id", getRejectedImages);
images.get("/:review_state", getPendingImages);
images.get("/", getAllImages);
images.get("/updateImages", insertImages);
images.post("/insertSelection", insertSelection);
images.post("/reviewImage", reviewImage);

//approveaj ili disapproveaj sliku

module.exports = images;
