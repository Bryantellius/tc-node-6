import { Component } from "react";

class LifecycleDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.controller = null;

    console.log("LD - Constructor");
  }

  componentDidMount() {
    // After first render
    console.log("LD - Mount");
    this.controller = new AbortController();

    fetch("https://www.codewars.com/api/v1/users/Bryantellius", {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.log(err.message));
  }

  componentDidUpdate() {
    // After each re-render
    console.log("LD - Update");
  }

  componentWillUnmount() {
    // After component is removed from the DOM
    console.log("LD - Unmount");
    this.controller.abort();
    console.log("Fetch request aborted");
  }

  render() {
    console.log("LD - Render");

    if (this.state.data) {
      return (
        <div>
          <h2>{this.state.data.username}</h2>
          <small>{this.state.data.honor}</small>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default LifecycleDisplay;
