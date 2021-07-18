import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `New message ${value}`;
    console.log("call useEffect");
  });

  console.log("render component");

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <h2>{value}</h2>
    </React.Fragment>
  );
};

export default UseEffectBasics;
