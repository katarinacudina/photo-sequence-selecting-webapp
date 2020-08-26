const images = require("express").Router();
const { insertImages } = require("../../queries/images");

images.get("/updateImages", insertImages);
//dohvati sve slike
//submittaj sliku

//approveaj ili disapproveaj sliku

module.exports = images;
