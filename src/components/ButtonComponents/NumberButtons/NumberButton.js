import React from "react";

const NumberButton = ({number}) => {
  if (number === "0"){
    return (
      <button className = "number-button zero"> {number} </button>
    );
  }
  else{
    return (
      <button className = "number-button"> {number} </button>
    );
  }
};

export default NumberButton