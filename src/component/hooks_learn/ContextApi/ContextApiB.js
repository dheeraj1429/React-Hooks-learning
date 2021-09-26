import React, { useContext } from "react";
import { firstContext } from "../../../App";

function ContextApiB() {
  const { value } = useContext(firstContext);
  console.log("value: ", value);
  return <div>{}</div>;
}

export default ContextApiB;
