console.log("hello world");

let response = fetch("https://ghibliapi.herokuapp.com/films");

let result = response.then((result) => {
  return result.json();
});

result.then((page) => {
  console.log(page);
});

response.catch((err) => {
  console.error(err);
});
