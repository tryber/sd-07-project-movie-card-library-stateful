import React from 'react';
import './App.css';

import data from './data';

import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
