import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={Data} />
    </div>
  );
}

export default App;
