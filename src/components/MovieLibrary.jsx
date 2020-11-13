import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import data from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };

    // this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
  }

  // onSearchTextChange() {

  // }

  // onBookmarkedChange() {

  // }
  //
  // onSelectedGenreChange() {
  // }

  addMovieHandler(movieObject) {
    return movieObject;
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={data} />
        <AddMovie onClick={this.addMovieHandler} />
      </div>
    );
  }
}

export default MovieLibrary;
