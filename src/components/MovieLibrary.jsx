import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.searchHandleState = this.searchHandleState.bind(this);
    this.checkedMovies = this.checkedMovies.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  // Referenciando a estrutura das funções: addMovieClick e checkedMovies:
  // https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/88/commits
  addMovieClick(newMovie) {
    const set = this.state.movies.concat(newMovie);
    this.setState({ movies: set });
  }
  checkedMovies(all) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return all.filter(
      (movie) =>
        (bookmarkedOnly === true ? movie.bookmarked === true : true) &&
        (selectedGenre === '' ? true : movie.genre === selectedGenre) &&
        (searchText === ''
          ? true
          : movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
            movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
            movie.storyline.toLowerCase().includes(searchText.toLowerCase())),
    );
  }

  searchHandleState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.searchHandleState}
          onBookmarkedChange={this.searchHandleState}
          onSelectedGenreChange={this.searchHandleState}
        />
        <MovieList movies={this.checkedMovies(this.props.movies)} />
        <AddMovie onClick={this.addMovieClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;
