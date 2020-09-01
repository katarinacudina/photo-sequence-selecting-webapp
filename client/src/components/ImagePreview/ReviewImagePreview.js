import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import axios from "axios";
import ManageImageAdmin from "./ManageImage/ManageImageAdmin";

function AreaSelector(props) {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", aspect: null });
  const [imageSrc, setImageSrc] = useState(null);
  const [selectionArray, setSelectionArray] = useState([]);
  const [currentSelection, setSelection] = useState({});

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);
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
  const displaySelection = (index) => {
    console.log(props.imageToDisplay.selection[index]);
    const selectionToDisplay = {
      ...props.imageToDisplay.selection[index],
      unit: "px",
      aspect: null,
    };
    console.log(selectionToDisplay);
    setCrop(selectionToDisplay);
  };
  var isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    loadImage();
  }, [props.imageToDisplay]);

  useEffect(() => {
    console.log(props);
    loadImage();
  }, []);
  return (
    <div>
      <ReactCrop
        src={imageSrc}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
      />
      <ManageImageAdmin {...props} displaySelection={displaySelection} />
    </div>
  );
}

export default AreaSelector;
