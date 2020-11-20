import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();
    this.onClick = this.onClick.bind(this);
    this.searchingText = this.searchingText.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);
    this.selectingGenre = this.selectingGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // referência: projeto de Vanessa Bidinotto
  onClick(movie) {
    this.setState({ movies: [...this.state.movies, movie] });
  }

  searchingText({ target }) {
    const { text } = target;
    this.setState({ searchText: text });
  }

  favoriteMovies({ target }) {
    let checkBox = false;
    if (target.type === 'ckeckbox') checkBox = target.checked;
    else checkBox = target.value;
    this.setState({ bookmarkedOnly: checkBox });
  }

  selectingGenre({ target }) {
    const { genre } = target;
    // console.log(genre);
    this.setState({ selectedGenre: genre });
  }

  filteredMovies() {
    // const { bookmarkedOnly, movies, selectedGenre, searchText } = this.state;
    if (this.state.bookmarkedOnly === true) {
      return this.state.movies.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      return this.state.movies
        .filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return this.state.movies
      .filter((movie) => movie.title.includes(this.state.searchText)
        || movie.subtitle.includes(this.state.searchText)
        || movie.storyline.includes(this.state.searchText));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.favoriteMovies}
          onSearchTextChange={this.searchingText}
          onSelectedGenreChange={this.selectingGenre}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
