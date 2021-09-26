import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Inc":
      return state + 1;
    case "Dec":
      return state - 1;
    case "Reset":
      return intialState;
    default:
      return state;
  }
};

function UserReducerFirst() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch("Inc")}>Inc</button>
        <button onClick={() => dispatch("Dec")}>Dec</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
    </>
  );
}

export default UserReducerFirst;
