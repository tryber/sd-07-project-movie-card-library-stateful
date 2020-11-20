import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends Component {
  constructor(props) {
    super();

    const { movies } = props;

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleGenre = this.handleGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filtered = (value !== undefined) ? movies.filter((movie) => movie.title.includes(value)
    || movie.subtitle.includes(value)
    || movie.storyline.includes(value)
    || movie.genre.includes(value)) : movies;
    this.setState({ searchText: value, movies: filtered, bookmarkedOnly: true });
  }

  handleGenre({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  handleAddMovie(newMovie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleTextChange}
          onBookmarkedChange={this.handleTextChange}
          onSelectedGenreChange={this.handleGenre}
        />
        <AddMovie onClick={this.handleAddMovie} />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) }.isRequired;

export default MovieLibrary;
