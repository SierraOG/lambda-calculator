import React, {useState} from "react";

//import any components needed
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperator] = useState(operators)
  return (
    <div>
      {operatorState.map( op => <OperatorButton ope = {op} setOpe = {setOperator}/>)}
    </div>
  );
};

export default Operators