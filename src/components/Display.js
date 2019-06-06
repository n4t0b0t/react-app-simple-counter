import React from "react";
import "../styles/Display.css";

function Display(props) {
  return (
    <div className={props.count < 0 ? "negative display" : "positive display"}>
      {props.count}
    </div>
  );
}

export default Display;
