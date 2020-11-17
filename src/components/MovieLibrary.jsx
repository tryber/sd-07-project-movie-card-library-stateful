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
    this.addMovie = this.addMovie.bind(this);
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

  addMovie(movie) {
    console.log(movie);
    // this.setState((lastState) => { return [lastState].push(movie); });
    this.setState({ movies: [...this.state.movies, movie] });
  }

  filterMovies() {
  }
  render() {
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
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addMovie} />
      </section>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
