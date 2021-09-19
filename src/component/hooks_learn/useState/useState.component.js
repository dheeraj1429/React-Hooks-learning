// import React from "react";
import React, { useState } from "react";
1;

const UseStateHook = () => {
  const counter = 0;
  const [timer, setTimer] = useState(counter);

  const changeHandler = () => {
    setTimer(counter + 5);
  };

  return (
    <>
      <button onClick={changeHandler}>click here</button>
      <p>{timer}</p>
    </>
  );
};

/*
2

class UseStateHook extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "h",
    };
  }

  changeHandler = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <>
        <input type="text" placeholder="type here" onChange={this.changeHandler} />
        <h1>{this.state.type}</h1>
      </>
    );
  }
}
*/

/*
3

const UseStateHook = () => {
  const [inputValue, setinputValue] = useState("");

  const changeHandler = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="type here" onChange={changeHandler} />
      <h1>{inputValue}</h1>
    </>
  );
};
// export default UseStateHook;
*/
