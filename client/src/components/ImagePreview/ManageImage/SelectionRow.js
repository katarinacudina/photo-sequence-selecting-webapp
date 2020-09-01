import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectionRow = ({
  selection,
  index,
  removeFromArray,
  displaySelection,
}) => {
  return (
    <div className="selection-row">
      <div onClick={() => displaySelection(index)}>
        x: {selection.x}, y: {selection.y}, width: {selection.width}, height:{" "}
      </div>
      {selection.height}
      <FontAwesomeIcon icon="times" onClick={() => removeFromArray(index)} />
    </div>
  );
};

export default SelectionRow;
