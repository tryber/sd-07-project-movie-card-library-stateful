import React from 'react';
import SearchBar from './components/SearchBar';
import movie from './data';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary movies={movie} />
    </div>
  );
}

export default App;
