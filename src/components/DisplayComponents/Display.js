import React from "react";

const Display = props => {
  const { total } = props;
  return <div className='display'>{/* Display any props data here */ total}</div>;
};

export default Display;
