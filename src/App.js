import './App.css';
import SearchBox from './components/search-box/search-box.component';
import Cardlist from './components/card-list/card-list.component';

// #region CLASS COMPONENT

// Order -->
// Mounting --> constructor ==> render ==> componentDidMount 
// Updating --> (New Props, setState(), forceUpdate()) ==> render ==> componentDidUpdate
// Unmounting --> componentWillUnmount

// import { Component } from 'react';
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   // Called only once during the initial render
//   componentDidMount() {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(response => response.json())
//       .then(users => {
//         this.setState({ monsters: users })
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState({ searchField })
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))

//     return <div className="App" >
//       <h1>MONSTERS LIST</h1>
//       <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholderText='Search Monsters...'
//       />
//       < Cardlist
//         monsters={filteredMonsters}
//       />
//     </div>
//   }
// }

// #endregion

//  #region FUNCTIONAL COMPONENT

import { useState, useEffect } from 'react';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App" >
      <h1>MONSTERS LIST</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholderText='Search Monsters...'
      />
      < Cardlist
        monsters={filteredMonsters}
      />
    </div>
  );
}

// #endregion

export default App;
