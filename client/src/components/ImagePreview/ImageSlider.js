import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import AreaSelector from "./AreaSelector";
import "./ImagePreview.css";

const ImageViewer = () => {
  return (
    <div className="slider-container">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="slider-container_arrow-icons"
      />
      <AreaSelector />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="slider-container_arrow-icons"
      />
    </div>
  );
};

export default ImageViewer;
