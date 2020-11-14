import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      <AddMovie />
    </div>
  );
}

export default App;
