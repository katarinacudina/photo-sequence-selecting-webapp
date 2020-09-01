import React, { useState, useEffect } from "react";
import SelectionRow from "./SelectionRow";
import TextArea from "../../Forms/Inputs/TextArea";
import axios from "axios";
import Button from "../../Forms/Inputs/Button";

const ManageImageAdmin = (props) => {
  const [comments, setComments] = useState(
    props.imageToDisplay.comments ? props.imageToDisplay.comments : ""
  );
  const reviewImage = (review_state) => {
    setComments("");
    axios
      .post("http://localhost:3000/images/reviewImage", {
        review_state,
        comments,
        id: props.imageToDisplay.id,
      })
      .then((res) => {
        console.log(res);
        res.status === 200 && props.nextImage(1);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <div className="manage-image__row">
        <div>
          {props.imageToDisplay.selection.map((el, i) => (
            <SelectionRow
              key={i}
              selection={el}
              index={i}
              removeFromArray={props.removeFromArray}
              displaySelection={props.displaySelection}
            />
          ))}
        </div>
        <div>Submitted by: {props.imageToDisplay.email}</div>
      </div>

      <TextArea
        title={"Comments:"}
        value={comments}
        setValue={setComments}
        maxLength={500}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button text="Reject" handleClick={() => reviewImage(2)} />
        <Button text="Approve" handleClick={() => reviewImage(1)} />
      </div>
    </div>
  );
};

export default ManageImageAdmin;
