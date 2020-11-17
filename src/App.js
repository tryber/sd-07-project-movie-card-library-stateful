import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movie from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movie={movie} />
    </div>
  );
}

export default App;
