import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovies from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.addMovie = this.addMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    const { movies } = this.state;

    const filterTextMovies = (value.length !== 0) ?
    movies.filter(({ title, subtitle, storyline }) => title.includes(value) ||
    subtitle.includes(value) || storyline.includes(value)) : movies;

    this.setState({
      searchText: value,
      movies: filterTextMovies,
    });
  }

  onBookmarkedChange(event) {
    const filterMarkedMovies = (event.target.checked) ?
    this.state.movies.filter(({ bookmarked }) =>
    bookmarked) : this.state.movies;

    this.setState({
      bookmarkedOnly: event.target.checked,
      movies: filterMarkedMovies,
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.state;
    const { value } = event.target;

    const filterGenreMovies = (value !== '') ?
    movies.filter(({ genre }) => value === genre) : movies;
    console.log(filterGenreMovies);

    this.setState({
      selectedGenre: value,
      movies: filterGenreMovies,
    });
  }

  addMovie(addMovie) {
    this.setState((previeus) => ({ movies: [...previeus.movies, addMovie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />

        <MovieList movies={this.state.movies} />

        <AddMovies onClick={this.addMovie} />

      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
