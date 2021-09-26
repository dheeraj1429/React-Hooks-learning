import React, { useContext, userContext } from "react";

import { CountContext } from "./UseReducerFour";

function ComponentA() {
  const userContext = useContext(CountContext);

  return (
    <>
      <div>{userContext.intialState}</div>

      <button onClick={() => userContext.dispatch("Inc")}>Inc</button>
      <button onClick={() => userContext.dispatch("Dec")}>Dec</button>
      <button onClick={() => userContext.dispatch("Reset")}>Reset</button>
    </>
  );
}

export default ComponentA;
