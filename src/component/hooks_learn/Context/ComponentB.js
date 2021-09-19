import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext, newUserContext } from "../../../App";

function ComponentB() {
  const first = useContext(userContext);
  const second = useContext(newUserContext);

  return (
    <div>
      {/* <ComponentC /> */}

      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
}

export default ComponentB;
