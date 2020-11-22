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
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange(this);
    this.addNewMovie = this.addNewMovie(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState(() => ({ searchText: value }));

    if (value !== '') {
      const moviesSelectedies = this.state.movies.filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value));
      this.setState(() => ({ movies: moviesSelectedies }));
    }
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState(() => ({ bookmarkedOnly: checked }));

    if (checked) {
      const moviesSelectedies = this.state.movies.filter((movie) => movie.bookMarked === true);
      this.setState(() => ({ movies: moviesSelectedies }));
    }
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState(() => ({ selectedGenre: value }));

    if (value !== '') {
      const moviesSelectedies = this.state.movies.filter((movie) => movie.genre === value);
      this.setState(() => ({ movies: moviesSelectedies }));
    }
  }

  addNewMovie(newMovie) {
    this.setState((statePrevius) => ({ movies: statePrevius.movies.concat(newMovie) }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookMarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
