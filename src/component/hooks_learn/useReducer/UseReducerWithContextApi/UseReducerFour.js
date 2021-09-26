import React, { useReducer } from "react";

import ComponentA from "./componentA";

export const CountContext = React.createContext();

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

function UseReducerFour() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <CountContext.Provider value={{ count, dispatch, intialState }}>
        <ComponentA />
      </CountContext.Provider>
    </>
  );
}

export default UseReducerFour;
