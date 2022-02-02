import { useState, useEffect } from "react";

const Vehicles = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((data) => setList(data))
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
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehicles;
