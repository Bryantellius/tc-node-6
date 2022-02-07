import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/");
  });

  if (!state) {
    return null;
  } else {
    return (
      <div className="card">
        <h1>{state.name}</h1>
        <small>{state.num}</small>
      </div>
    );
  }
};

export default Single;
