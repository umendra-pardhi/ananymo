import React, { useState } from 'react';

function Test() {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value === 0) {
      setValue(1);
    }else if(value===-1){
      setValue(0);
    }
    
  };

  const decrease = () => {
    if (value === 1) {
      setValue(0);
    } else if (value === 0) {
      setValue(-1);
    }
  };
  

  return (
    <div>
      <p>{value}</p>
      <button onClick={increase} disabled={value === 1}>Up</button>
      <button onClick={decrease} disabled={value === -1}>Down</button>
    </div>
  );
}

export default Test;
