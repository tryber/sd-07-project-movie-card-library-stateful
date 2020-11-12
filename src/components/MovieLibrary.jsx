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

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.filterBookmarked = this.filterBookmarked.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.filterText = this.filterText.bind(this);
  }

  handleStateChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleAddMovie(newMovie) {
    this.setState(({ movies }) => ({ movies: [...movies, newMovie] }));
  }

  filterBookmarked(movie) {
    return this.state.bookmarkedOnly ? movie.bookmarked : movie;
  }

  filterGenre(movie) {
    return this.state.selectedGenre !== ''
      ? movie.genre.toLowerCase().includes(this.state.selectedGenre)
      : movie;
  }

  filterText(movie) {
    return this.state.searchText !== ''
      ? movie.title.toLowerCase().includes(this.state.searchText) ||
        movie.subtitle.toLowerCase().includes(this.state.searchText) ||
        movie.storyline.toLowerCase().includes(this.state.searchText)
      : movie;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.handleStateChange}
          onBookmarkedChange={this.handleStateChange}
          onSelectedGenreChange={this.handleStateChange}
        />
        <MovieList
          movies={this.state.movies
            .filter(this.filterBookmarked)
            .filter(this.filterGenre)
            .filter(this.filterText)}
        />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
