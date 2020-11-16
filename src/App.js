import React from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={Movies} />
    </div>
  );
}

export default App;
