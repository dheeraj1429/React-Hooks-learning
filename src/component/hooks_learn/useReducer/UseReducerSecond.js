import React, { useReducer } from "react";

const initialState = {
  fireCounter: 0,
  seconCounter: 100,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
      return { ...state, fireCounter: state.fireCounter + action.value };
    case "Dec":
      return { ...state, fireCounter: state.fireCounter - action.value };

    case "Inc2":
      return { ...state, seconCounter: state.seconCounter + action.value };
    case "Dec2":
      return { ...state, seconCounter: state.seconCounter - action.value };

    case "Reset":
      return { ...state, fireCounter: (state.fireCounter = action.value) };
  }
};

function UseReducerSecond() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{counter.fireCounter}</div>
      <div>{counter.seconCounter}</div>
      <button onClick={() => dispatch({ type: "Inc", value: 1 })}>Inc</button>
      <button onClick={() => dispatch({ type: "Dec", value: 1 })}>Dec</button>
      <button onClick={() => dispatch({ type: "Reset", value: 0 })}>Reset</button>

      <button onClick={() => dispatch({ type: "Inc2", value: 5 })}>Inc 5</button>
      <button onClick={() => dispatch({ type: "Dec2", value: 5 })}>Dec 5</button>
    </div>
  );
}

export default UseReducerSecond;
