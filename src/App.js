import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import MovieList from './components/MovieList';
import data from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary/>
      <MovieList
        movies={data}/>
    </div>
  );
}

export default App;
