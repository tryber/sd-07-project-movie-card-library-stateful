import React from 'react';
import './App.css';
// import movies from './data';
// import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

import Header from './components/Header';
// import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
    </div>
  );
}

export default App;
