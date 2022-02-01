import { Component } from "react";

class Cla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello World!", // initial title value
      count: 0,
      films: [],
    };

    this.controller = new AbortController();
  }

  updateTitle = (event) => {
    this.setState({
      title: document.querySelector("#titleCla").value,
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films", {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then((data) => this.setState({ films: data }))
      .catch((err) => alert(err.message));
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.props.desc}</p>
        <input type="text" name="title" id="titleCla" />
        <button onClick={this.updateTitle}>
          Update Cla Title {this.state.count} times
        </button>
        <ul>
          {this.state.films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cla;
