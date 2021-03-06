import React from "react";

function Button(props) {
  return (
    <button className={props.class} onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

export default Button;
