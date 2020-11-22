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

    this.onChange = this.onChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addNewMovies = this.addNewMovies.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  filterMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let filteredMovies = movies.filter(
      (movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
      );
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredMovies;
  }


  addNewMovies(movie) {
    this.setState((previous) => ({ movies: [...previous.movies, movie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          onSearchChange={this.onChange}
          bookmarkedOnly={this.bookmarkedOnly}
          onBookmarkedChange={this.onChange}
          selectedGenre={this.selectedGenre}
          onSelectedGenreChange={this.onChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.addNewMovies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
