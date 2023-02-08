import React, { useReducer } from "react";
const initialState = {
  first: "",
  last: "",
};

const userReducer = (state, action) => {
  return { ...state, ...action };
};
const UserForm = () => {
  const [state, dispatchState] = useReducer(userReducer, initialState);

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatchState({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatchState({ last: e.target.value })}
      />
      <div>{state.first}</div>
      <div>{state.last}</div>
    </div>
  );
};

export default UserForm;
/* 
const initialState = {
  names: [],
  name: "",
};
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_NAME":
      return { ...state, names: [...state.names, state.name], name: "" };
  }
};
const UseReducerDemo = () => {
  const [state, dispatchState] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <div>
        {state.names.map((el, i) => {
          return <div key={i}>{el}</div>;
        })}
      </div>
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
      <button
        onClick={(e) =>
          dispatchState({
            type: "ADD_NAME",
            payload: e.target.value,
          })
        }
      >
        Add Name
      </button>
    </div>
  );
};

export default UseReducerDemo;

const numbers = [10, 20, 30, 40];
const total = numbers.reduce((curr, acc) => {
  console.log(acc);
  return curr + acc;
}, 0);
*/
