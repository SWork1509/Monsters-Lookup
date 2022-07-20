import './App.css';

// #region CLASS COMPONENT

// Order -->
// Mounting --> constructor ==> render ==> componentDidMount 
// Updating --> (New Props, setState(), forceUpdate()) ==> render ==> componentDidUpdate
// Unmounting --> componentWillUnmount

import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // Called only once during the initial render
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState({ searchField })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))


    return <div className="App" >
      <h1>MONSTERS LIST</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholderText='Search Monsters...'
      />
      < Cardlist
        monsters={filteredMonsters}
      />
    </div>
  }
}

// #endregion

//  #region FUNCTIONAL COMPONENT

// const App = () => {
//   return (
//     <div className="App" >
//       <h1>MONSTERS LIST</h1>
//       {/* <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholderText='Search Monsters...'
//       />
//       < Cardlist
//         monsters={filteredMonsters}
//       /> */}
//     </div>
//   );
// }

// #endregion

export default App;
