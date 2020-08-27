import React, { useEffect, useState } from "react";

import AreaSelector from "./AreaSelector";
import "./ImagePreview.css";
import axios from "axios";

const ImageViewer = () => {
  const loadImageList = () => {
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
  const nextImage = () => {
    let index = currentImageIndex + 1;
    setIndex(index);
  };

  /**USE STATE */
  const [imageList, setImageList] = useState([]);
  const [currentImageIndex, setIndex] = useState(0);
  if (imageList.length > 0)
    return (
      <div className="slider-container">
        {console.log(imageList[currentImageIndex])}
        {
          <AreaSelector
            nextImage={nextImage}
            imageToDisplay={imageList[currentImageIndex]}
          />
        }
      </div>
    );
  else return <div>Loading</div>;
};

export default ImageViewer;
