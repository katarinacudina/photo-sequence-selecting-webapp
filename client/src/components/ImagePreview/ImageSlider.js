import React, { useEffect, useState } from "react";
import AreaSelector from "./AreaSelector";
import Slider from "./Slider";
import Loader from "../Loader/Loader";
import "./ImagePreview.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewImagePreview from "./ReviewImagePreview";
import { connect } from "react-redux";

const ImageSlider = (props) => {
  const loadImageList = () => {
    var route = "";
    if (props.view === "review-new-images")
      route = `http://localhost:3000/images/getImagesForUser/${props.user_id}`;
    else if (props.view === "review-existing-images")
      route = `http://localhost:3000/images/getRejectedImages/${props.user_id}`;
    else if (props.view === "admin-review-images")
      route = "http://localhost:3000/images/0";
    else if (props.view === "all-images")
      route = "http://localhost:3000/images";

    axios
      .get(route)
      .then((res) => {
        setImageList(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(props.view);
    async function fetchData() {
      await loadImageList();
    }
    fetchData();
  }, []);
  const nextImage = (addition) => {
    let index = currentImageIndex + addition;
    setIndex(index);
  };

  /**USE STATE */
  const [imageList, setImageList] = useState([]);
  const [currentImageIndex, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    if (imageList.length > 0) {
      return (
        <div className="image-slider__container">
          <div className="image-slider__title">
            Image {currentImageIndex + 1} out of {imageList.length}
          </div>
          {props.view === "admin-review-images" ? (
            <ReviewImagePreview
              nextImage={nextImage}
              imageToDisplay={imageList[currentImageIndex]}
              {...props}
            />
          ) : props.view === "all-images" ? (
            <Slider
              nextImage={nextImage}
              imageToDisplay={imageList[currentImageIndex]}
            />
          ) : (
            <AreaSelector
              nextImage={nextImage}
              imageToDisplay={imageList[currentImageIndex]}
              {...props}
            />
          )}

          <Link to="/home">Back to homepage</Link>
        </div>
      );
    } else
      return (
        <div className="no-images">
          <div className="no-images__text">No images to display</div>
          <Link to="/home">Back to homepage</Link>
        </div>
      );
  } else return <Loader />;
};
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(ImageSlider);
