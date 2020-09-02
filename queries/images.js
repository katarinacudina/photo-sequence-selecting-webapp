const db = require("../db/index");
const pgp = require("pg-promise")({});
const { listImages } = require("./helpers/listImages");

const getAllImages = async (req, res, next) => {
  try {
    let images = await db.any("SELECT * FROM images;");
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
const getImagesForUser = async (req, res, next) => {
  try {
    let images = await db.any(
      `SELECT image_id,image_name
    FROM   images 
    WHERE  NOT EXISTS (
       SELECT  
       FROM   reviewed_images
       WHERE  image_id = images.image_id and user_id = $1
       );`,
      req.params.user_id
    );
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
const getRejectedImages = async (req, res, next) => {
  const review_state = 2;
  try {
    let images = await db.any(
      `SELECT images.image_id, images.image_name, selection, comments, id FROM images 
      INNER JOIN reviewed_images ON images.image_id = reviewed_images.image_id 
       WHERE review_state = $1 AND user_id = $2;`,
      [review_state, req.params.user_id]
    );
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};

const getApprovedImages = async (req, res, next) => {
  try {
    const review_state = 1;
    let images = await db.any(
      `SELECT images.image_name, selection FROM images 
    INNER JOIN reviewed_images ON images.image_id = reviewed_images.image_id 
     WHERE review_state = $1;`,
      [review_state]
    );
    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};
const getPendingImages = async (req, res, next) => {
  try {
    let images = await db.any(
      `SELECT images.image_id, image_name, reviewed_images.id, reviewed_images.user_id, comments, selection, account.email FROM images 
    INNER JOIN reviewed_images ON images.image_id = reviewed_images.image_id 
    INNER JOIN account ON account.user_id = reviewed_images.user_id
     WHERE review_state = $1;`,
      [req.params.review_state]
    );
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

const reviewImage = async (req, res, next) => {
  const query =
    "UPDATE reviewed_images SET review_state = $1, comments = $2 WHERE id = $3";
  try {
    await db.none(query, [
      req.body.review_state,
      req.body.comments,
      req.body.id,
    ]);
    res.status(200).json("Success.");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getImagesForUser,
  insertImages,
  getAllImages,
  getApprovedImages,
  getPendingImages,
  insertSelection,
  reviewImage,
  getRejectedImages,
};
