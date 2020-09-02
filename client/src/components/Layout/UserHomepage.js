import React from "react";
import Button from "../Forms/Inputs/Button";
import { Link } from "react-router-dom";
import "./Layout.css";

const UserView = (props) => {
  const redirectToReview = () => {
    props.history.push("/user/review-new-images");
  };
  return (
    <div className="user-view__container">
      <div className="user-view">
        <div className="user-view__title">
          Welcome ! Hundreds of images are waiting to be reviewed.{" "}
        </div>
        <Button
          text={"Start reviewing"}
          handleClick={redirectToReview}
          color="black"
        />
        <Link to="/user/review-existing-images">
          ...or review images you already submitted
        </Link>
      </div>
    </div>
  );
};

export default UserView;
