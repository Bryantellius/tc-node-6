import { useEffect, useState } from "react";

const FuncFilms = (props) => {
  const [films, setFilms] = useState([]);
  const controller = new AbortController();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => alert(err.message));

    return () => controller.abort();
  }, []);

  const updateFilm = (event) => {
    console.log("Updating film lists");

    const list = films.map((film) => {
      if (event.target.id == film.id) {
        film.seen = true;
      }

      return film;
    });
    setFilms(list);
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {films
          .sort((filmA, filmB) => {
            if (filmA.seen == undefined && filmB.seen) {
              return -1;
            } else {
              if (
                (filmA.seen && filmB.seen) ||
                (filmA.seen == undefined && filmB.seen == undefined)
              ) {
                if (filmA.rt_score == filmB.rt_score) {
                  return filmA.title - filmB.title;
                } else return filmA.rt_score - filmB.rt_score;
              } else return 1;
            }
          })
          .map((film) => (
            <li key={film.id}>
              {film.title} {film.rt_score}{" "}
              <input
                id={film.id}
                type="checkbox"
                value={film.seen}
                onChange={updateFilm}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FuncFilms;
