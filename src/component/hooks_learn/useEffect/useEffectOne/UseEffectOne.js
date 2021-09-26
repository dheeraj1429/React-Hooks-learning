import React, { useEffect, useState } from "react";

function UseEffectOne() {
  const [Count, setCount] = useState(0);

  const timer = () => {
    setCount(Count + 1);
  };

  useEffect(() => {
    setInterval(timer(), 1000);
  }, []);

  return (
    <div>
      <p>{Count}</p>
    </div>
  );
}

export default UseEffectOne;
