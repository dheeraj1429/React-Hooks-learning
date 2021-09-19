// in react functon compoent
import React, { useState } from "react";

const UseStateHookNew = () => {
  const num = 0;
  const [counter, setCounter] = useState(num);

  //   const IncFiv = () => {
  //     setCounter(counter + 5);
  //   };

  const IncFiv = () => {
    for (let i = 0; i < 5; i++) {
      // update the countr only one time
      //   setCounter(counter + 1);

      setCounter((prevState) => prevState + 1);
    }
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(num)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
      {/* <button onClick={() => setCounter(counter + 5)}>Inc 5</button> */}
      <button onClick={IncFiv}>Inc 5</button>
    </>
  );
};

export default UseStateHookNew;
