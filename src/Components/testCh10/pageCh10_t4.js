import React, { useReducer } from "react";
const funReducer = (state, action) => {
  if (action.type === "increament") return { value: state.value + 1 };
  if (action.type === "decearment") return { value: state.value - 1 };
  if (action.type === "zero") return { value: 0 };

  return state;
};
const Pagech10_t4 = () => {
  const [itemNumber, dispatch] = useReducer(funReducer, { value: 0 });
  // console.log('PageCh10_t4  --',itemNumber);

  return (
    <div>
      <hr />
      <h2 className="m-2">PageCh10_t4 useReducer </h2>
      <br />
      <h3>itemNumber : {itemNumber.value}</h3>

      <button
        className="btn btn-primary "
        onClick={() => {
          dispatch({ type: "increament" });
        }}
      >
        {" "}
        increament{" "}
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          dispatch({ type: "decearment" });
        }}
      >
        {" "}
        decearment{" "}
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          dispatch({ type: "zero" });
        }}
      >
        {" "}
        zero{" "}
      </button>
    </div>
  );
};
export default Pagech10_t4;
