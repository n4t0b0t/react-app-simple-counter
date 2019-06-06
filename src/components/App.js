import React from "react";
import Counter from "./Counter";
import "../styles/App.css";

function App(props) {
  const counterArr = Array(props.num).fill();
  return counterArr.map((number, index) => {
    return <Counter key={index} count={Math.floor(Math.random() * 10)} />;
  });
}

export default App;
