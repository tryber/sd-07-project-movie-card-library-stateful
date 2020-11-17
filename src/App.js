import React from 'react';
import './App.css';
import Data from './data';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={Data} />
      <AddMovie />
    </div>
  );
}

export default App;
