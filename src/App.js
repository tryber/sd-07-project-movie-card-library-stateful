import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary />
    </div>
  );
}

export default App;
