import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar genres={data} />
      </div>
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
