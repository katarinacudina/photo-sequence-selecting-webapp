import React, { useEffect } from "react";
import SelectionRow from "./SelectionRow";
import Button from "../../Forms/Inputs/Button";

const ManageImage = (props) => {
  console.log(props.imageToDisplay.comments);
  return (
    <div>
      <div className="manage-image__row">
        <table>
          <tbody>
            {props.selection.map((el, i) => (
              <SelectionRow
                key={i}
                selection={el}
                index={i}
                removeFromArray={props.removeFromArray}
              />
            ))}
          </tbody>
        </table>
        <div>
          <Button
            color="blue"
            text="Add selection"
            handleClick={props.addSelection}
          />
          <Button
            color="green"
            text="Submit"
            handleClick={props.submitSelection}
          />
        </div>
      </div>
      {props.imageToDisplay.comments && (
        <div>Comments: {props.imageToDisplay.comments}</div>
      )}
    </div>
  );
};

export default ManageImage;
