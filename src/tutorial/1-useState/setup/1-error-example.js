import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    setTitle("changed");
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
