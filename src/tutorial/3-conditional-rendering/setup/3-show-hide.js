import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener(getWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window width: </h1>
      <h1>{width}</h1>
    </div>
  );
};

export default ShowHide;
