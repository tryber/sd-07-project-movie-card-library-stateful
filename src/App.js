import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
      </div>
    );
  }
}
export default App;
