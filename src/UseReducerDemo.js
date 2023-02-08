import React, { useReducer } from "react";
const initialState = {
  names: [],
  name: "",
};
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
  }
};
const UseReducerDemo = () => {
  const [state, dispatchState] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatchState({
            type: "SET_NAME",
            payload: e.target.value,
          })
        }
      />
      <div>{state.name}</div>
    </div>
  );
};

export default UseReducerDemo;

//   const numbers = [10, 20, 30, 40];
//   const total = numbers.reduce((curr, acc) => {
//     console.log(acc);
//     return curr + acc;
//   }, 0);
