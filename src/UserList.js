import React, { useState } from "react";

const NameList = () => {
  const [user, SetUser] = useState(["haneef", "khan"]);
  const [name, setName] = useState("");
  const users = user.map((el, i) => {
    return <li key={i}>{el}</li>;
  });
  const InputChangeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const addNameHandler = (e) => {
    e.preventDefault();
    SetUser([...user, name]);
    setName("");
  };
  return (
    <div>
      <ul>{users}</ul>
      <input type="text" onChange={InputChangeHandler} value={name} />
      <button type="button" onClick={addNameHandler}>
        Add Name
      </button>
    </div>
  );
};

export default NameList;
