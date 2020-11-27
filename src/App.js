import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MovieLibrary movies={movies} /> */}
      <SearchBar/>
    </div>
  );
}

export default App;
