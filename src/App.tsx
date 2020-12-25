import { Component } from "react";
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
    monsters: [
      { name: "Frankenstein", id: "7yuij" },
      { name: "Mummy", id: "ghb12" },
      { name: "Yurei", id: "0jhn4" },
      { name: "Zombie", id: "5iuh2" },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
