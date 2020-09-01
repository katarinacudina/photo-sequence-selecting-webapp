import React from "react";

const TextArea = (props) => {
  return (
    <div className="text-area-container">
      <label>{props.title}</label>
      <textarea
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        maxLength={props.maxLength}
        rows="6"
      />
    </div>
  );
};

export default TextArea;
