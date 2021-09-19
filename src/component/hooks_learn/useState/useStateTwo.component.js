import React, { useState } from "react";

const UseStateTwo = () => {
  const [name, setName] = useState({ yourFirstName: "", yourSecondName: "" });

  return (
    <>
      <div>
        <input type="text" placeholder="type" onChange={(e) => setName({ ...name, yourFirstName: e.target.value })} />
        <input type="text" placeholder="type" onChange={(e) => setName({ ...name, yourSecondName: e.target.value })} />
        <p>{name.yourFirstName}</p>
        <p>{name.yourSecondName}</p>
      </div>
    </>
  );
};

export default UseStateTwo;
