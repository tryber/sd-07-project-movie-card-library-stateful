// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.newMovie = this.newMovie.bind(this);
    this.handleFilteredMovies = this.handleFilteredMovies.bind(this);
    this.handleStates = this.handleStates.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  newMovie(movie) {
    this.setState((previousElement) => ({ movies: [...previousElement.movies, movie] }));
  }

  handleFilteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    let arrayFilter = movies.filter(
      (movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
    );

    if (bookmarkedOnly) {
      arrayFilter = arrayFilter.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      arrayFilter = arrayFilter.filter(
        (movie) => movie.genre === selectedGenre,
      );
    }

    return arrayFilter;
  }

  handleStates({ target }) {
    const { type, name, value, checked } = target;
    let newValue = value;
    if (type === 'checkbox') newValue = checked;

    this.setState({ [name]: newValue });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleStates}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleStates}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleStates}
        />
        <MovieList movies={this.handleFilteredMovies()} />
        <AddMovie onClick={this.newMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

MovieLibrary.defaultProps = { movies: [] };

export default MovieLibrary;
