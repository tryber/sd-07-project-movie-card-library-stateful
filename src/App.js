import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import movies from './data';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={movies} />
      <AddMovie />
    </div>
  );
}

export default App;
