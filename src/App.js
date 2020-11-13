import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={Movies} />
    </div>
  );
}

export default App;
