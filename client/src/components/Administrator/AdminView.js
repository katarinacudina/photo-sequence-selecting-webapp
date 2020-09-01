import React, { useEffect, useState } from "react";
import "./AdminView.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import downloadData from "./downloadData";

const AdminView = (props) => {
  const [optionsOpened, setOptionsOpened] = useState(false);
  const redirectToRoute = (route) => props.history.push(route);
  const downloadSelectionData = () => {
    axios
      .get("http://localhost:3000/images/getApprovedImages")
      .then((res) =>
        downloadData("selection-data.txt", JSON.stringify(res.data))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin-view">
      <h1>Choose an action:</h1>
      <h4
        className="admin-view__option"
        onClick={() => setOptionsOpened(!optionsOpened)}
      >
        Review images{" "}
      </h4>
      {optionsOpened && (
        <div>
          {" "}
          <h5
            className="admin-view__option"
            onClick={() => redirectToRoute("/administrator/all-images")}
          >
            View all images
          </h5>
          <h5
            className="admin-view__option"
            onClick={() => redirectToRoute("/administrator/review-images")}
          >
            Review submitted images
          </h5>
          <h5
            className="admin-view__option"
            onClick={() => downloadSelectionData()}
          >
            Download selection data
          </h5>
        </div>
      )}
      <h4
        className="admin-view__option"
        onClick={() => redirectToRoute("/administrator/manage-account")}
      >
        Manage Accounts{" "}
      </h4>
    </div>
  );
};

export default withRouter(AdminView);
