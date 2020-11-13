import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import Header from './components/Header';

function App() {
  // o App chama MovieLibrary passando paramentro data que sao
  // os movies, MovieLibrary recebe o parametro de todas
  // as classes e chama chama MovieList que tem o props para receber
  // o data onde tem o parametro representado
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
