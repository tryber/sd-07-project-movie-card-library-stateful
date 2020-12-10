import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
    </div>
  );
}

export default App;
