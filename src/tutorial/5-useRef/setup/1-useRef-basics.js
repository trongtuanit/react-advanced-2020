import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
  };

  useEffect(() => {
    console.log(refContainer);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
