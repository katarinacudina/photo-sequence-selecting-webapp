const db = require("../db/index");
const pgp = require("pg-promise")({});
const { listImages } = require("./helpers/listImages");

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
module.exports = { insertImages };
