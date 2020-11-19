import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }
  render() {
    return (
      <div>
        <SearchBar searchText={this.state.searchText} />
        <MovieList movies={movies} />
        <AddMovie rating={0} />
      </div>
    );
  }
}

export default MovieLibrary;
