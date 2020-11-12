import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar movies={data} />
    </div>
  );
}

export default App;
