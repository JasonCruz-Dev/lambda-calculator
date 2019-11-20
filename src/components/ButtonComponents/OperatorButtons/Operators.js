import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  const [operatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className='operatorButtons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operatorState.map((item, index) => {
        console.log(item);
        return <OperatorButton setTotal={props.setTotal} key={index} operators={item.char} />;
      })}
    </div>
  );
};

export default Operators;
