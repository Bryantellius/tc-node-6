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
          {/* <Cla title="Films by Class Component" /> */}
          <Func title="Films by Functional Component" />
        </div>
      </div>
    );
  }
}

export default App;
