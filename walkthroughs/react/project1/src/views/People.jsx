import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchList = async () => {
    let response = await fetch("https://ghibliapi.herokuapp.com/people");
    let data = await response.json();
    console.log(data.length);
    setOriginalList(data);
    setFilteredList(data);
  };

  const handleSearch = () => {
    let tempList = originalList.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(tempList);
  };

  const generateSuggestions = () => {
    return originalList
      .filter((person) => person.name.length >= search.length)
      .sort((p1, p2) => {
        return (
          p2.name
            .split("")
            .filter((char) => search.toLowerCase().includes(char.toLowerCase()))
            .length -
          p1.name
            .split("")
            .filter((char) => search.toLowerCase().includes(char.toLowerCase()))
            .length
        );
      })
      .sort((p1, p2) => p1.name.length - p2.name.length)
      .map((suggestion) => (
        <div key={suggestion.id} className="card">
          <div className="card-body">
            <Link to={suggestion.id}>{suggestion.name}</Link>
          </div>
        </div>
      ));
  };

  useEffect(() => {
    fetchList();
  }, []);

  let listJSX = filteredList.map((item) => {
    return (
      <div key={item.id} className="card">
        <div className="card-body">
          <Link to={item.id}>{item.name}</Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Studio Ghibli People</h1>
      <input
        type="search"
        placeholder="Haku"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="task-container">
        {listJSX.length == 0 ? (
          <div className="card">
            <div className="card-body">
              <h2>No Search Results</h2>
              <p>Did you mean:</p>
              {generateSuggestions()}
            </div>
          </div>
        ) : (
          listJSX
        )}
      </div>
    </div>
  );
};

export default People;
