import { Component } from "react";

import { CardList } from "./components/card-list";

import "./App.css";

type Monster = {
  name: string;
  id: string | number;
};

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
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
