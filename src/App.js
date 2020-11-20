import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviLibrary from './components/MovieLibrary';
import data from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <MoviLibrary movies={data} />
    </div>
  );
}

export default App;
