import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import movies from './data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={movies} />
    </div>
  );
}

export default App;
