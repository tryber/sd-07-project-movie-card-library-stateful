import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props
    return (
      <div>
        <SearchBar searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        bookmarkedOnly={bookmarkedOnly}
        onBookmarkedChange={onBookmarkedChange}
        selectedGenre={selectedGenre}
        onSelectedGenreChange={onSelectedGenreChange} />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
