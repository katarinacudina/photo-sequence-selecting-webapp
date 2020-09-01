import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = (props) => {
  const loadImage = () => {
    axios
      .get(`http://localhost:3000/images/${props.imageToDisplay.image_name}`, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImageSrc("data:;base64," + base64);
      });
  };
  useEffect(() => {
    async function fetchData() {
      await loadImage();
    }
    fetchData();
  }, []);
  var isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    loadImage();
  }, [props.imageToDisplay]);
  const [imageSrc, setImageSrc] = useState("");

  return (
    <div>
      <div className="slider">
        <FontAwesomeIcon
          icon="chevron-left"
          className="slider-container_arrow-icons"
          onClick={() => props.nextImage(-1)}
        />
        <img src={imageSrc} alt={props.imageToDisplay.image_name} />
        <FontAwesomeIcon
          icon="chevron-right"
          className="slider-container_arrow-icons"
          onClick={() => props.nextImage(1)}
        />
      </div>
    </div>
  );
};

export default Slider;
