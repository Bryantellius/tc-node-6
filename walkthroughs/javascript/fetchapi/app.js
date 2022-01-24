console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Program Values
const GIPHY_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

// DOM Selection
const form = document.querySelector("form");
const search = document.querySelector("#search");
const img = document.querySelector("img");

// Event Listener(Async Await Version)
form.addEventListener("submit", fetchGiphy);

async function fetchGiphy(event) {
  event.preventDefault();

  let searchValue = search.value;

  try {
    // https://api.giphy.com/v1/gifs/translate?api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz&s=dogs

    let response = await fetch(
      GIPHY_URL + "?api_key=" + GIPHY_KEY + "&s=" + searchValue
    );
    let results = await response.json();

    console.log(results);

    img.src = results.data.images.original.url;
  } catch (err) {
    console.error(err);
  }
}

// Event Listeners (Promise Version)
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let searchValue = search.value;

//   // https://api.giphy.com/v1/gifs/translate?api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz&s=dogs

//   fetch(GIPHY_URL + "?api_key=" + GIPHY_KEY + "&s=" + searchValue)
//     .then((response) => response.json())
//     .then((results) => {
//       console.log(results);
//       img.src = results.images.original.url;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });
