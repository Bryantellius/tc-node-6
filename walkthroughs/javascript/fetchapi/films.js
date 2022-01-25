console.log("Films List");

const ul = document.querySelector("ul");

fetchFilms();

// Async/Await Syntax

async function fetchFilms() {
  try {
    let res = await fetch("https://ghibliapi.herokuapp.com/films");
    let films = await res.json();
    // DOM Manipulation
    films.forEach((film) => {
      // Create a li
      const li = document.createElement("li");
      li.classList.add("card");
      // Use the title, original title, image
      const title = document.createElement("h2");
      title.textContent = film.title;
      const rtScore = document.createElement("small");
      rtScore.textContent = film.rt_score;
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.alt = film.description;
      img.src = film.image;
      // Append title, original title, and image to li
      li.append(img, title, rtScore);
      // Append li to ul
      ul.appendChild(li);
    });
  } catch (err) {
    console.error(err);
  }
}

// Promise Syntax

// fetch("https://ghibliapi.herokuapp.com/films")
//   .then((res) => res.json())
//   .then((films) => {
//     films.forEach((film) => {
//       // Create a li
//       const li = document.createElement("li");
//       li.classList.add("card");
//       // Use the title, original title, image
//       const title = document.createElement("h2");
//       title.textContent = film.title;
//       const rtScore = document.createElement("small");
//       rtScore.textContent = film.rt_score;
//       const img = document.createElement("img");
//       img.classList.add("card-img")
//       img.alt = film.description;
//       img.src = film.image;
//       // Append title, original title, and image to li
//       li.append(img, title, rtScore);
//       // Append li to ul
//       ul.appendChild(li);
//     });
//   })
//   .catch((err) => console.error(err));
