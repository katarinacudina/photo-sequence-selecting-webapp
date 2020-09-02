import React, { useState } from "react";
import "./AdminView.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import downloadData from "./downloadData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminView = (props) => {
  const [optionsOpened, setOptionsOpened] = useState(false);
  const redirectToRoute = (route) => props.history.push(route);
  const downloadSelectionData = () => {
    axios
      .get("http://localhost:3000/images/getApprovedImages")
      .then((res) =>
        downloadData("selection-data.json", JSON.stringify(res.data))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="admin-view">
      <div className="admin-view-container">
        <div className="title">Choose an action:</div>
        <div className="admin-view-options">
          <div
            className="admin-view__option"
            onClick={() => setOptionsOpened(!optionsOpened)}
          >
            <FontAwesomeIcon icon={optionsOpened ? "minus" : "plus"} />
            Review images
          </div>
          {optionsOpened && (
            <div>
              {" "}
              <div
                className="suboption"
                onClick={() => redirectToRoute("/administrator/all-images")}
              >
                View all images
              </div>
              <div
                className=" suboption"
                onClick={() => redirectToRoute("/administrator/review-images")}
              >
                Review submitted images
              </div>
              <div
                className=" suboption"
                onClick={() => downloadSelectionData()}
              >
                Download selection data
              </div>
            </div>
          )}
          <div
            className="admin-view__option"
            onClick={() => redirectToRoute("/administrator/manage-accounts")}
          >
            <FontAwesomeIcon icon="plus" />
            Manage Accounts{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminView);
