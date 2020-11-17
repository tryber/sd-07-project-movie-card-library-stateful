// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  onSearchTextChange({ target }) {
    this.setState(
      {
        searchText: target.value,
      };
    );
  }
  render() {
    const movies = this.state.movies;
    return (
      <div>
        <MovieList movies={movies} />
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange} searchText={this.state.searchText } 
        />
      </div>
    );
  }
}

export default MovieLibrary;
