import React from 'react';
import './App.css';
import AddMovie from './components/AddMovie';

import Header from './components/Header';

function App() {
  const onClick = (state) => {
    console.log(state);
  };

  return (
    <div className="App">
      <Header />
      <AddMovie onClick={onClick} />
    </div>
  );
}

export default App;
