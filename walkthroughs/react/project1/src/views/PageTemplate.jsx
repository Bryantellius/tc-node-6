import { useReducer } from "react";

const reducer = (state, action) => {
  const now = new Date();

  switch (action.type) {
    case "succeeded":
      return {
        status: action.type,
        color: "green",
        display: "Succeeded with request",
        now,
      };
    case "failed":
      return {
        status: action.type,
        color: "red",
        display: "Failed to complete action",
        now,
      };
    default:
      throw new Error("Unknown action");
  }
};

const initialState = {
  status: "pending",
  color: "gray",
  display: "Waiting for test",
  now: new Date(),
};

const PageTemplate = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 style={{ color: state.color }}>
        {state.display} at {state.now.toLocaleTimeString()}
      </h1>
      <button onClick={() => dispatch({ type: "succeeded" })}>
        Test Succeed
      </button>
      <button onClick={() => dispatch({ type: "failed" })}>Test Fail</button>
    </div>
  );
};

export default PageTemplate;
