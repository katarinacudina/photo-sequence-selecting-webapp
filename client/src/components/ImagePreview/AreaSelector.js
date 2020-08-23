import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import image from "./slika.jpg";

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 4;

function AreaSelector() {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", aspect: null });
  const [selection, setSelection] = useState([]);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);
  const proba = () => {
    console.log(crop);
  };
  const submitSelection = () => {
    let array = selection;
    array.push(crop);
    setCrop({});
    setSelection(array);
    console.log(selection);
  };

  return (
    <div>
      <div>
        <ReactCrop
          src={image}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={() => proba()}
        />
        <button onClick={submitSelection}>Submit</button>
        {selection.map((element) => (
          <div>{element.x}</div>
        ))}
      </div>
    </div>
  );
}
export default AreaSelector;
