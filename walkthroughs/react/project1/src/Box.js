import { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.props.handleBoxClick}
        style={{
          backgroundColor: this.props.color,
          width: "100px",
          height: "100px",
        }}
      >
        {this.props.color}
      </div>
    );
  }
}

export default Box;
