/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    message: "this is message",
  });

  const [name, setName] = useState("john");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("default mesage");

  const changeMessage = () => {
    setMessage("hello world");

    setPerson({ ...person, message: "message changed" });
  };
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
