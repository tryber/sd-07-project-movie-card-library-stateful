import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    onSearchTextChange() { "hello" }
    searchText() { "word" }
    render() {
    return (  
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
        <SearchBar />
      </div>
    );
  }
}

export default App;
