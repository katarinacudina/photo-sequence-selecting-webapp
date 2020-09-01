import React from "react";
import SelectionRow from "./SelectionRow";
import Button from "../../Forms/Inputs/Button";

const ManageImage = (props) => {
  return (
    <div className="manage-image__row">
      <div>
        {props.selection.map((el, i) => (
          <SelectionRow
            key={i}
            selection={el}
            index={i}
            removeFromArray={props.removeFromArray}
          />
        ))}
      </div>
      <div>
        <Button text="Add selection" handleClick={props.addSelection} />
        <Button text="Submit" handleClick={props.submitSelection} />
      </div>
    </div>
  );
};

export default ManageImage;
