import { Component } from "react";

import { Monster } from "./utils/shared";
import { CardList } from "./components/card-list";

import "./App.css";

type AppState = {
  monsters: Monster[];
};

class App extends Component {
  state: AppState = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users as Monster[] }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
