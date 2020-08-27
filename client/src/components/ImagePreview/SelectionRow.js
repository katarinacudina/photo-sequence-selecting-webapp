import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectionRow = ({ selection, index, removeFromArray }) => {
  return (
    <div className="selection-row">
      x: {selection.x}, y: {selection.y}, width: {selection.width}, height:{" "}
      {selection.height}
      <FontAwesomeIcon icon="times" onClick={() => removeFromArray(index)} />
    </div>
  );
};

export default SelectionRow;
