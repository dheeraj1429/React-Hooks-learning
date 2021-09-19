import React from "react";
import { userContext, newUserContext } from "../../../App";

function ComponentC() {
  // bad way to write context
  return (
    <div>
      <userContext.Consumer>
        {(name) => {
          return (
            <newUserContext.Consumer>
              {(newUser) => {
                return (
                  <div>
                    <p>{`this name is ${name}, and name is ${newUser}`}</p>
                  </div>
                );
              }}
            </newUserContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentC;
