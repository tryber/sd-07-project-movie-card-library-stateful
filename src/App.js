import React from 'react';
import './App.css';
import movies from './data';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
// import MovieList from './components/MovieList';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies}/>
    </div>
  );
}

export default App;
