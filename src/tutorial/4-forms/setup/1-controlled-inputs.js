import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime.toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div>
            <div className="form-control">
              <label htmlFor="firstName">Name: </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={person.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                value={person.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label htmlFor="email">Age: </label>
              <input
                type="text"
                name="age"
                id="age"
                value={person.age}
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSubmit} type="submit">
              Add person
            </button>
          </div>
        </form>

        {people.map((person, idx) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
