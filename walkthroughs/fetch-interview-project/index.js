console.log("Script attached");

// DOM SELECTIONS
let form = document.querySelector("form");
let occupationSelect = document.querySelector("#occupation");
let stateSelect = document.querySelector("#state");
let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

// INITIAL FETCH FOR OCCUPATION AND STATE SELECT OPTIONS
fetch("https://frontend-take-home.fetchrewards.com/form")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let length =
      data.occupations.length > data.states.length
        ? data.occupations.length
        : data.states.length;

    for (let i = 0; i < length; i++) {
      if (data.states[i]) {
        let stateOption = document.createElement("option");
        stateOption.textContent = data.states[i].name;
        stateOption.value = data.states[i].abbreviation;
        stateSelect.appendChild(stateOption);
      }

      if (data.occupations[i]) {
        let occupationOption = document.createElement("option");
        occupationOption.textContent = data.occupations[i];
        occupationOption.value = data.occupations[i];
        occupationSelect.appendChild(occupationOption);
      }
    }
  })
  .catch((err) => console.error(err));

// EVENT LISTENER FOR FORM SUBMISSION
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // ASSIMILATE FORM DATA IN JSON OBJECT
  let body = {
    name: fullName.value,
    email: email.value,
    password: password.value,
    occupation: occupationSelect.value,
    state: stateSelect.value,
  };

  // SEND POST REQUEST WITH JSON DATA
  fetch("https://frontend-take-home.fetchrewards.com/form", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      // IF 200 STATUS CODE, FLASH SUCCESSFUL FEEDBACK
      // ELSE FLASH FAILURE FEEDBACK
      if (res.ok) {
        flashAlert("Successful Signup", "success");
      } else {
        flashAlert("Signup Failed. Try again later.", "danger");
      }
    })
    .catch((err) => console.error(err))
    .finally(() => {
      // RESET FORM VALUES
      fullName.value = "";
      email.value = "";
      password.value = "";
      occupationSelect.value = "Head of Shrubbery";
      stateSelect.value = "AL";
    });
});

// FLASHES TEMPORARY DIV ALERT WITH MESSAGE AND TYPE
function flashAlert(msg, type) {
  let alert = document.createElement("div");
  alert.classList.add("alert", `bg-${type}`);
  alert.textContent = msg;
  document.body.appendChild(alert);

  setTimeout(() => {
    document.body.removeChild(alert);
  }, 5000);
}
