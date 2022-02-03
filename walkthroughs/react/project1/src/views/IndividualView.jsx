import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const IndividualView = () => {
  const [item, setItem] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();

  const endpoint = pathname.split("/")[1];

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/${endpoint}/${params.id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error(err));
  }, []);

  if (!item) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="task-container">
        <div className="card">
          <button onClick={() => navigate(-1)}>Back</button>
          <div className="card-body">
            <h1>{item.name || item.title}</h1>
            <code>
              {`{\n`}
              {Object.entries(item)
                .map(([prop, val]) => {
                  return `${prop}: ${val},`;
                })
                .join("\n")}
              {`\n\}`}
            </code>
          </div>
        </div>
      </div>
    );
  }
};

export default IndividualView;
