import { ChangeEvent, Component } from "react";

import { Monster } from "./utils/shared";
import { SearchBox } from "./components/search-box";
import { CardList } from "./components/card-list";

import "./App.css";

type AppState = {
  monsters: Monster[];
  searchField: string;
};

class App extends Component {
  state: AppState = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users as Monster[] }));
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
