import { Component } from "react";

class ClaFilms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };

    this.controller = new AbortController();
  }

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
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.films.map((film) => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClaFilms;
