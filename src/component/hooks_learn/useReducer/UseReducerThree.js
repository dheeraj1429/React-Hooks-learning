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

function UserReducerThree() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, intialState);

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch("Inc")}>Inc</button>
        <button onClick={() => dispatch("Dec")}>Dec</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>

      <div>
        <div>{countTwo}</div>
        <button onClick={() => dispatchTwo("Inc")}>Inc</button>
        <button onClick={() => dispatchTwo("Dec")}>Dec</button>
        <button onClick={() => dispatchTwo("Reset")}>Reset</button>
      </div>
    </>
  );
}

export default UserReducerThree;
