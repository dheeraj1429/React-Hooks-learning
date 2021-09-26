import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initalState = {
  error: "",
  data: [],
  loading: true,
};

const reducer = (state, action) => {
  if (action.type == "success") {
    return {
      data: action.ResponseData,
      error: "",
      loading: false,
    };
  }

  if (action.type == "error") {
    return {
      data: [],
      error: "Somthing Worrong",
      loading: true,
    };
  }
};

function UseReducerFive() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
      .then((res) => {
        dispatch({ type: "success", ResponseData: res });
      })
      .catch((err) => {
        dispatch({ type: "error" });
      });
  }, []);

  console.log(state);

  return (
    <>
      <div>
        {state.error ? (
          state.error
        ) : (
          <div>
            {state.data.data.results.map((el) => (
              <h1>{el.title}</h1>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default UseReducerFive;
