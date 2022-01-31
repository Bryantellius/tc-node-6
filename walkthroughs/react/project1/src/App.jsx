import "./App.css";
import { Component } from "react";
import Box from "./components/Box";
import LifecycleDisplay from "./components/LifecycleDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor");

    const numBoxes = 10;
    const boxes = [];

    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(
          0,
          255
        )}, ${this.getRandomNumber(0, 255)})`,
        width: 180,
        height: 180,
      });
    }

    // set default state
    this.state = {
      boxes,
      min: 0,
      max: 255,
      display: true,
    };

    // bind methods to this
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  /**
   * Returns a random number between the min and the max number provided.
   * @param {number} min
   * @param {number} max
   * @returns {number} random number
   */
  getRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Refers to the event.target.id to update the color of the box that was clicked, and updates state to trigger a re-render.
   * @param {HTMLClickEvent} event
   */
  handleColorChange(event, all = false) {
    const newBoxes = this.state.boxes.map((box) => {
      if (box.id == event.target.id || all) {
        box.color = `rgb(${this.getRandomNumber(
          this.state.min,
          this.state.max
        )}, ${this.getRandomNumber(
          this.state.min,
          this.state.max
        )}, ${this.getRandomNumber(this.state.min, this.state.max)})`;
        box.width++;
        box.height++;
      }

      return box;
    });

    this.setState({ boxes: newBoxes });
  }

  componentDidMount() {
    // After first render
    console.log("App - Mount");

    setTimeout(() => {
      this.setState({ display: false });
    }, 10);
  }

  componentDidUpdate() {
    // After each re-render
    console.log("App - Update");
  }

  componentWillUnmount() {
    // After component is removed from the DOM
    console.log("App - Unmount");
  }

  render() {
    console.log("App - Render");

    let { min, max, boxes, display } = this.state;

    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        {display ? <LifecycleDisplay /> : null}
        <div className="form-group">
          <label htmlFor="min">Min</label>
          <input
            type="number"
            name="min"
            id="min"
            value={min}
            onChange={(e) =>
              this.setState({
                min: isNaN(parseInt(e.target.value))
                  ? 0
                  : parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="max">Max</label>
          <input
            type="number"
            name="max"
            id="max"
            value={max}
            onChange={(e) =>
              this.setState({
                max: isNaN(parseInt(e.target.value))
                  ? 0
                  : parseInt(e.target.value),
              })
            }
          />
        </div>
        <button onClick={(e) => this.handleColorChange(e, true)}>
          Randomize All
        </button>
        <div className="App">
          {boxes.map((box) => {
            return (
              <Box
                key={box.id}
                color={box.color}
                id={box.id}
                handleColorChange={this.handleColorChange}
                height={box.height}
                width={box.width}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default App;
