console.log("Hello World!");

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(newState) {
    for (let prop in newState) {
      this.state[prop] = newState[prop];
      this.render();
    }
  }
}

class App extends Component {
  render() {
    console.log("Rendering App...");
    console.log(this.props.title);
  }
}

let props = {
  title: "Title from props",
};
new App(props).render();
