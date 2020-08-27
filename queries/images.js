const db = require("../db/index");
const pgp = require("pg-promise")({});
const { listImages } = require("./helpers/listImages");

const getAllImages = async (req, res, next) => {
  try {
    let images = await db.any("SELECT * from images;");
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};

const insertImages = async (req, res, next) => {
  const imageArray = await listImages();
  const cs = new pgp.helpers.ColumnSet(["image_name", "image_path"], {
    table: "images",
  });
  const query = pgp.helpers.insert(imageArray, cs);
  try {
    await db.none(query);
    res.status(200).json("success");
  } catch (err) {
    next(err);
  }
};

const insertSelection = async (req, res, next) => {
  const query =
    "INSERT INTO reviewed_images (image_id, user_id, review_state, selection) VALUES ($1, $2, $3, $4)";
  try {
    await db.none(query, [
      req.body.image_id,
      req.body.user_id,
      0, //pending
      req.body.selection,
    ]);
    res.status(200).json("success");
  } catch (err) {
    next(err);
  }
};

module.exports = { insertImages, getAllImages, insertSelection };
