import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      allMovies: this.props.movies,
      showMovies: this.props.movies,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.updateShowMovies = this.updateShowMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  handleSearchChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (beforeState) => ({
        ...beforeState,
        [name]: value,
      }),
      this.updateShowMovies,
    );
    return value;
  }

  updateShowMovies() {
    const { allMovies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const showMovies = allMovies
      .filter((movie) =>
        this.filterAllConditions(movie, searchText, bookmarkedOnly, selectedGenre),
      );
    this.setState(
      (beforeState) => ({
        ...beforeState,
        showMovies,
      }));
  }

  filterAllConditions(movie, searchText, bookmarkedOnly, selectedGenre) {
    return (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText))
        && (bookmarkedOnly ? movie.bookmarked === true : true)
        && (selectedGenre ? movie.genre === selectedGenre : true);
  }

  addMovie(newMovie) {
    this.setState(
      (beforeState) => ({
        ...beforeState,
        allMovies: beforeState.allMovies.concat(newMovie),
      }),
      this.updateShowMovies,
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleSearchChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleSearchChange}
        />
        <MovieList
          movies={this.state.showMovies}
        />
        <AddMovie
          onClick={this.addMovie}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
