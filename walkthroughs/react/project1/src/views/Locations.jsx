import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Locations = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        console.log(data.length);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Studio Ghibli Locations</h1>
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

export default Locations;
