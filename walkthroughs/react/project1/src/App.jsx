import { Component } from "react";
import Cla from "./components/Cla";
import Func from "./components/Func";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div>
          <h1>Class vs Functional Components</h1>
          <Cla desc="A component that can handle state internally." />
          <Func desc="A component that will need hooks to access state." />
        </div>
      </div>
    );
  }
}

export default App;
