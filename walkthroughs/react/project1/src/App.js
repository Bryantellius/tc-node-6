import { Component } from "react";
import Box from "./Box";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const arr = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      arr.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`,
      });
    }

    this.state = {
      boxes: arr,
    };

    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  getRandomColor() {
    return Math.round(Math.random() * 255); // return an integer from 0-255
  }

  handleBoxClick(event) {
    let newBoxes = this.state.boxes.map((box) => {
      if (box.id == event.target.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
      }

      return box;
    });
    this.setState({ boxes: newBoxes });
  }

  render() {
    return (
      <div className="box-container">
        {this.state.boxes.map((box) => {
          return (
            <Box
              key={box.id}
              id={box.id}
              color={box.color}
              handleBoxClick={this.handleBoxClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
