/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const intervalRef = React.useRef(null);

  const reset = () => {
    setValue(0);
  };
  const startDescrease = () => {
    intervalRef.current = setInterval(() => {
      setValue((prevCounter) => prevCounter - 1);
    }, 70);
  };
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startIncrease = () => {
    intervalRef.current = setInterval(() => {
      setValue((prevCounter) => prevCounter + 1);
    }, 70);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onMouseDown={startDescrease}
          onMouseUp={stop}
          onMouseLeave={stop}
        >
          Descrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button
          className="btn"
          onMouseDown={startIncrease}
          onMouseUp={stop}
          onMouseLeave={stop}
        >
          Increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
