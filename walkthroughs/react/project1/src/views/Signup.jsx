import { useState, useEffect } from "react";

const Alert = ({ show, msg }) => {
  if (show) {
    return <div className="alert">{msg}</div>;
  } else return null;
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [state, setState] = useState("");
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertValue, setAlertValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let body = {
      name,
      email,
      password,
      occupation,
      state,
    };

    let res = await fetch("https://frontend-take-home.fetchrewards.com/form", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setShowAlert(true);
    if (res.ok) {
      setAlertValue("Successful Signup");
    } else {
      setAlertValue("Failed to signup. Try again later.");
    }

    setName("");
    setEmail("");
    setPassword("");
    setOccupation("");
    setState("");

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => res.json())
      .then(({ occupations, states }) => {
        setOccupations(occupations);
        setStates(states);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Alert show={showAlert} msg={alertValue} />
      <div class="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="user@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="AbCdE123!"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div class="form-group">
        <label htmlFor="occupation">Occupation:</label>
        <select
          name="occupation"
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          {occupations.map((occ, index) => {
            return (
              <option value={occ} key={occ + index}>
                {occ}
              </option>
            );
          })}
        </select>
      </div>
      <div class="form-group">
        <label htmlFor="state">State:</label>
        <select
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Choose...</option>
          {states.map(({ name, abbreviation }, index) => {
            return (
              <option value={abbreviation} key={abbreviation + index}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div class="form-group">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;
