// precisa ter estado
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      addMovie: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  async addMovie(objNewMovie) {
    this.setState({ addMovie: objNewMovie });
    this.setState((estadoAnterior) => (
      { movies: estadoAnterior.movies.concat(estadoAnterior.addMovie) }
    ));
  }

  render() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let filteringMovies = movies;

    if (bookmarkedOnly === true) {
      filteringMovies = filteringMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteringMovies = filteringMovies.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (searchText !== '') {
      filteringMovies = filteringMovies.filter((movie) => movie
        .title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={filteringMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
