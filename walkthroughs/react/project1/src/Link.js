import { Component } from "react";

class Link extends Component {
  constructor(props) {
    super(props);

    this.className = "App-link";
  }

  render() {
    return (
      <a href={this.props.link} className={this.className}>
        {this.props.text}
      </a>
    );
  }
}

export default Link;
