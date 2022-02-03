import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Vehicles</h1>
      <div className="task-container">
        {list.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-body">
                <Link to={item.id}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehicles;
