import React, { useState } from "react";

const UseStateArray = () => {
  const [Item, setItem] = useState([
    {
      name: "First",
    },
    {
      name: "second",
    },
  ]);

  const AddItemHandler = () => {
    setItem([...Item, { name: `${Math.trunc(Math.random() * 6) + 1}` }]);
  };

  return (
    <>
      <div>
        <button onClick={AddItemHandler}>add</button>
        <ul>
          {Item.map((el) => (
            <li key={el.name}>{el.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseStateArray;
