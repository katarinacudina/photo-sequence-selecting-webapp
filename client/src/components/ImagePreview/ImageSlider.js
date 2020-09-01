import React, { useEffect, useState } from "react";

import AreaSelector from "./AreaSelector";
import Slider from "./Slider";
import "./ImagePreview.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewImagePreview from "./ReviewImagePreview";

const ImageViewer = (props) => {
  const loadImageList = () => {
    if (props.view === "review-images")
      axios
        .get("http://localhost:3000/images/0")
        .then((res) => setImageList(res.data))
        .catch((err) => console.log(err));
    else
      axios
        .get("http://localhost:3000/images/")
        .then((res) => setImageList(res.data))
        .catch((error) => console.log("Something went wrong", error));
  };
  useEffect(() => {
    async function fetchData() {
      await loadImageList();
    }
    fetchData();
  }, []);
  const nextImage = (addition) => {
    console.log("jesmo tu", addition);
    let index = currentImageIndex + addition;
    setIndex(index);
  };

  /**USE STATE */
  const [imageList, setImageList] = useState([]);
  const [currentImageIndex, setIndex] = useState(0);
  if (imageList.length > 0 && props.view === "all-images")
    return (
      <>
        <div>
          Image {currentImageIndex + 1} out of {imageList.length}
        </div>
        <Slider
          nextImage={nextImage}
          imageToDisplay={imageList[currentImageIndex]}
        />

        <Link to="/home">Back to homepage</Link>
      </>
    );
  else if (imageList.length > 0 && props.view === "undefined")
    return (
      <>
        <div>
          Image {currentImageIndex + 1} out of {imageList.length}
        </div>
        <AreaSelector
          nextImage={nextImage}
          imageToDisplay={imageList[currentImageIndex]}
          {...props}
        />
        <Link to="/home">Back to homepage</Link>
      </>
    );
  else if (imageList.length > 0 && props.view === "review-images")
    return (
      <>
        <div>
          Image {currentImageIndex + 1} out of {imageList.length}
        </div>
        <ReviewImagePreview
          nextImage={nextImage}
          imageToDisplay={imageList[currentImageIndex]}
          {...props}
        />
        <Link to="/home">Back to homepage</Link>
      </>
    );
  else return <div>Loading</div>;
};

export default ImageViewer;
