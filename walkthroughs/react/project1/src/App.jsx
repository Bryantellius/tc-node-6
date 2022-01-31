import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      searchUser: "Bryantellius",
    };

    this.controller = new AbortController();
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = (event) => {
    if (event) event.preventDefault();

    fetch("https://www.codewars.com/api/v1/users/" + this.state.searchUser, {
      signal: this.controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.username && !data.success)
          return this.flashMessage(data.reason || "User does not exist");
        let tempList = Array.from(this.state.list);
        tempList.push(data);
        this.setState({ list: tempList });
      })
      .catch((err) => console.error(err));
  };

  flashMessage(msg) {
    let flash = document.createElement("div");
    flash.style =
      "background-color: tomato; color: white; border-radius: 8px; text-align: center; top: 0; right: 0; position: fixed;";
    flash.textContent = msg;
    document.body.appendChild(flash);
    setTimeout(() => {
      document.body.removeChild(flash);
    }, 5000);
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    return (
      <div className="App">
        <h1>node-6 Codewars</h1>
        <div>
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="Bryantellius"
              onChange={(e) => this.setState({ searchUser: e.target.value })}
              value={this.state.searchUser}
            />
            <button>Search</button>
          </form>
        </div>
        <hr />
        <div>
          {this.state.list.map((user) => {
            return (
              <div key={user.username}>
                <h2>{user.username}</h2>
                <p>Score: {user.honor}</p>
                <p>Rank: {user.ranks.overall.rank}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
