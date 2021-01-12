import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import moviesData from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={moviesData} />
    </div>
  );
}

export default App;
