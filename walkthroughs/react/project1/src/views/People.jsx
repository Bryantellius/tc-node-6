import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    let response = await fetch("https://ghibliapi.herokuapp.com/people");
    let data = await response.json();
    console.log(data.length);
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h1>Studio Ghibli People</h1>
      <div className="task-container">
        {list.map((item) => {
          return (
            <div key={item.id} className="card">
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

export default People;
