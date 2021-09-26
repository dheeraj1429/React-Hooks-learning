import React, { useState, useEffect } from "react";

const UseEffectFour = () => {
  const [count, setcount] = useState(0);

  const timer = () => {
    setcount((prveCount) => prveCount + 1);
  };

  useEffect(() => {
    const intervale = setInterval(timer, 1000);
    return () => {
      clearInterval(intervale);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
    </>
  );
};

export default UseEffectFour;
