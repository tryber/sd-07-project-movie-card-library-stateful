import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.searchTextChanged = this.searchTextChanged.bind(this);
    this.bookmarkedChanged = this.bookmarkedChanged.bind(this);
    this.selectedGenreChanged = this.selectedGenreChanged.bind(this);
  }

  searchTextChanged({ target }) {
    this.setState({ searchText: target.value });
  }

  bookmarkedChanged({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  selectedGenreChanged({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  // filterMovies({ movie, selectedGenre }) {
  //   this.setState({ movies: movies
  //     .filter(movie.includes( selectedGenre === '' || movie.genre === selectedGenre)
      // .filter(movie.includes(bookmarkedOnly ) ||
      // movie.includes(storyline)
  //   )});
  // }
  render() {
    const { movies } = this.props;

    return (
      <section>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.searchTextChanged}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChanged}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.selectedGenreChanged}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   bookmarkedOnly: PropTypes.bool.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
