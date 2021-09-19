import React, { useState, useEffect } from "react";

const UseEffectFirest = () => {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `title ${Counter}`;
  });

  return (
    <>
      <button
        onClick={() => {
          setCounter(() => Counter + 1);
        }}
      >
        click {Counter}
      </button>
      <p>{Counter}</p>
    </>
  );
};

export default UseEffectFirest;
