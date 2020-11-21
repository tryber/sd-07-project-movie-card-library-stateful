import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchText = this.onSearchText.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedOnly.bind(this);
    this.onSelectedGenre = this.onSelectedGenre.bind(this);
  }

  onSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  onSelectedGenre(event) {
    this.setState({ onSelectedGenre: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchText={this.onSearchText}
          bookmarkedOnly={this.state.searchText}
          onBookmarkedOnly={this.onBookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenre={this.onSelectedGenre}
        />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}


export default MovieLibrary;
