import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext, newUserContext } from "../../../App";

function ComponentB() {
  const first = useContext(userContext); // get the all values from userContext
  const second = useContext(newUserContext);
  console.log(first);
  return (
    <div>
      {/* <ComponentC /> */}

      <p>{first.name}</p>
      <p>{second.age}</p>
    </div>
  );
}

export default ComponentB;
