import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  onSearchTextChange() {
    console.log('test');
  }

  onBookmarkedChange() {
    console.log('teste4');
  }

  onSelectedGenreChange() {
    console.log('teste6');
  }

  selectedGenre() {
    console.log('test5');
  }


  searchText() {
    console.log('teste2');
  }

  bookmarkedOnly() {
    console.log('teste3');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={movies} />
        <SearchBar
          onSearchTextChange={this.onSearchTextChange}
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    );
  }
}


export default App;
