// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      newMovie: {},
    };
  }

  handleChanges({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  async newMovie(objNewMovie) {
    this.setState({ newMovie: objNewMovie });
    this.setState((estadoAnterior) => (
      { movies: estadoAnterior.movies.concat(estadoAnterior.newMovie) }
    ));
  }

  render() {
    let filteredMovies = this.state.movies;

    if (this.state.bookmarkedOnly === true) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (this.state.selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (this.state.searchText !== '') {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText));
    }

    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChanges}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChanges}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChanges}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

// CHECAR CC E ARRUMAR AS PROPS QUE O NAVEGADOR TA RECLAMANDO

MovieLibrary.defaultProps = { movies: [] };

export default MovieLibrary;
