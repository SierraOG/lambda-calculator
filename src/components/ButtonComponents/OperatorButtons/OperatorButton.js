import React from "react";

const OperatorButton = ({ope}) => {
  return (
    <button className = "operator-button"> {ope.char} </button>
  );
};

export default OperatorButton