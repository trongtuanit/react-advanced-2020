/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  const descrease = () => {
    setTimeout(() => {
      setValue((previousValue) => {
        if (!previousValue) {
          return previousValue + 1;
        }
        return previousValue + 1;
      });
    }, 2000);
  };

  const increase = () => {};

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={descrease}>
          Descrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={increase}>
          Increase
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
