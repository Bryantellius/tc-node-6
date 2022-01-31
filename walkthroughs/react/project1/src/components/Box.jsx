import * as React from "react";

const Box = ({ id, handleColorChange, width, height, color }) => {
  console.log("Box - Render");

  return (
    <div
      id={id}
      onClick={handleColorChange}
      style={{
        width,
        height,
        backgroundColor: color,
        border: "1px solid black",
        display: "inline-block",
      }}
    >
      <span>{color}</span>
    </div>
  );
};

export default Box;
