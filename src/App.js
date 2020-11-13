import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
// import addMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
      </div>
    );
  }
}

export default App;
