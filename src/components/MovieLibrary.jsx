
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
