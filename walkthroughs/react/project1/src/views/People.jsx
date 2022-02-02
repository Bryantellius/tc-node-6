import { useState, useEffect } from "react";

const People = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    let response = await fetch("https://ghibliapi.herokuapp.com/people");
    let data = await response.json();
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
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
