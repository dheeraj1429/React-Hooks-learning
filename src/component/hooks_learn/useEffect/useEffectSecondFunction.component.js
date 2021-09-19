import React, { useState, useEffect } from "react";

const UseEffectSecondFunction = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");

  useEffect(() => {
    console.log("updating");
  }, [count]);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
      <button type="button" onClick={() => setcount(count + 1)}>
        {count}
      </button>
    </>
  );
};

export default UseEffectSecondFunction;
