import React from "react";

const NumberButton = props => {
  const changeTotal = () => {
    props.setTotal(props.numbers);
  };

  return (
    <>
      <button className='number button' onClick={() => changeTotal()}>
        {props.numbers}
      </button>
    </>
  );
};

export default NumberButton;
