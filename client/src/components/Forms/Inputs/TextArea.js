import React from "react";

const TextArea = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <textarea
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        maxLength={maxLength}
      />
    </div>
  );
};

export default TextArea;
