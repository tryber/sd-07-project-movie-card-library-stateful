import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieData from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar 
        searchText='uma string'
        onSearchTextChange='uma callback'
        bookmarkedOnly='um boolean'
        onBookmarkedChange='uma callback'
        selectedGenre='uma string'
        onSelectedGenreChange='uma callback'
      />
      <MovieList movies={MovieData} />
    </div>
  );
}

export default App;
