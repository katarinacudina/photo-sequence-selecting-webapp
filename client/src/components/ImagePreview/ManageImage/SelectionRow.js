import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectionRow = ({
  selection,
  index,
  removeFromArray,
  displaySelection,
}) => {
  return (
    <tr className="selection-row">
      <td onClick={() => displaySelection(index)}>
        x: {selection.x}, y: {selection.y}, width: {selection.width}, height:
        {selection.height}
      </td>

      <td>
        <FontAwesomeIcon icon="times" onClick={() => removeFromArray(index)} />
      </td>
    </tr>
  );
};

export default SelectionRow;
