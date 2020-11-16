import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import AddMovie from './components/AddMovie';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar />
      </div>
      <MovieLibrary movies={data} />
        <AddMovie />
    </div>
  );
}

export default App;
