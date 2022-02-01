import { useState, useEffect } from "react";

const Func = (props) => {
  const [title, setTitle] = useState("Hello World!");
  const [count, setCount] = useState(0);
  const [films, setFilms] = useState([]);

  const controller = new AbortController();

  const updateTitle = (event) => {
    setTitle(document.querySelector("#titleFunc").value);
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => alert(err.message));

    return () => controller.abort();
  }, []); // only call the callback on initial render

  return (
    <div>
      <h1>{title}</h1>
      <p>{props.desc}</p>
      <input type="text" name="title" id="titleFunc" />
      <button onClick={updateTitle}>Update Func Title {count} times</button>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Func;
