import "./App.css";
import { Component } from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);

    const numBoxes = 50;
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

  render() {
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
        <div className="form-group">
          <label htmlFor="min">Min</label>
          <input
            type="number"
            name="min"
            id="min"
            value={this.state.min}
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
            value={this.state.max}
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
          {this.state.boxes.map((box) => {
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
