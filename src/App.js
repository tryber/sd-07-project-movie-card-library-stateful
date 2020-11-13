import React from 'react';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
