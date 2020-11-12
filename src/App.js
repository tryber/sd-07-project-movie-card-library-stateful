import React from 'react';
import './App.css';
import SearchBar from './src/components/SearchBar'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
