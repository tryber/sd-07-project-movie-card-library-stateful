import React from 'react';
import './App.css';

import Data from './data';
import Header from './components/Header';

import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={Data} />
      </div>
    );
  }
}

export default App;
