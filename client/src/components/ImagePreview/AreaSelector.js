import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ManageImage from "./ManageImage";
import axios from "axios";

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

function AreaSelector(props) {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", aspect: null });
  const [imageSrc, setImageSrc] = useState(null);
  const [selectionArray, setSelectionArray] = useState([]);
  const [currentSelection, setSelection] = useState({});

  const submitSelection = () => {
    const user_id = 10;
    axios
      .post(`http://localhost:3000/images/insertSelection`, {
        image_id: props.imageToDisplay.image_id,
        user_id,
        selection: JSON.stringify(selectionArray),
      })
      .then((res) => {
        res.status === 200 && props.nextImage();
      })
      .catch((err) => console.log(err));
    clearData();
  };
  const clearData = () => {
    setCrop({ unit: "%", aspect: null });
    setSelection({});
    setSelectionArray([]);
  };
  const removeFromArray = (index) => {
    let array = [...selectionArray];
    array.splice(index, 1);
    setSelectionArray(array);
    console.log("array", array, "selection-array", selectionArray);
  };
  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);
  const addSelection = () => {
    let array = selectionArray;
    array.push(currentSelection);
    setSelectionArray(array);
    setCrop({ unit: "%", aspect: null });
    console.log(array);
  };
  const saveCrop = (crop) => {
    delete crop.aspect;
    delete crop.unit;
    setSelection(crop);
  };
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
    console.log(props.imageToDisplay.image_name);
  };
  var isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log("novi propovi");
    loadImage();
  }, [props.imageToDisplay]);

  useEffect(() => loadImage(), []);
  return (
    <div>
      <ReactCrop
        src={imageSrc}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => saveCrop(c)}
      />
      <ManageImage
        addSelection={addSelection}
        selection={selectionArray}
        removeFromArray={removeFromArray}
        submitSelection={submitSelection}
      />
    </div>
  );
}
export default AreaSelector;
