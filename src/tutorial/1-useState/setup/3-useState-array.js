import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  const addPeople = () => {
    setPeople(data);
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)}>remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={clearPeople}>
        clear all items
      </button>
      <button className="btn" onClick={addPeople}>
        add all items
      </button>
    </>
  );
};

export default UseStateArray;
