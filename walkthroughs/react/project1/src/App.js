import { Component } from "react";
import "./App.css";
import Link from "./Link";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <p>Class Component</p>
          <Link text="Google" link="https://google.com" />
          <Link text="TrueCoders" link="https://truecoders.io" />
          <Link text="Espn" link="https://espn.com" />
        </header>
      </div>
    );
  }
}

export default App;
