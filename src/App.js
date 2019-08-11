import React, { Component } from 'react';
import { CardList } from './components/card-lists/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      serachField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, serachField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(serachField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monstrs Rolodex</h1>
        <SearchBox
          placeholder='Search Monster'
          handleChange={e => this.setState({ serachField: e.target.value })}
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
