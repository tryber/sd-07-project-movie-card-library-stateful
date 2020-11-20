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
    // this.filteredMovies = this.filteredMovies.bind(this);
    // this.favoriteMovies = this.favoriteMovies.bind(this);
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

  // filtra pelo input de texto
  searchingText({ target }) {
    const { text } = target;
    const { movies } = this.state;
    const inputMovies = (text !== undefined) ? movies
      .filter((movie) => movie.title.includes(text)
        || movie.subtitle.includes(text)
        || movie.genre.includes(text)
        || movie.storyline.includes(text)) : movies;
    this.setState({ searchText: text, movies: inputMovies, bookmarkedOnly: true });
  }

  // filtrar pelo checkbox

  // favoriteMovies({ target }) {
  //   let checkBox = false;
  //   if (target.type === 'ckeckbox') checkBox = target.checked;
  //   else checkBox = target.value;
  //   this.setState({ bookmarkedOnly: checkBox });
  // }

  selectingGenre({ target }) {
    const { genre } = target;
    const { movies } = this.state;
    const movieGenre = (genre !== '') ? movies
      .filter((movie) => movie.genre === genre) : movies;
    this.setState({ selectedGenre: genre, movies: movieGenre });
  }

  // filteredMovies() {
  //   const { bookmarkedOnly, movies, selectedGenre, searchText } = this.state;
  //   console.log(movies);
  //   if (bookmarkedOnly === true) {
  //     return movies.filter((movie) => movie.bookmarked === true);
  //   }
  //   if (selectedGenre !== '') {
  //     return movies
  //       .filter((movie) => movie.genre === selectedGenre);
  //   }
  //   return movies
  //     .filter((movie) => movie.title.includes(searchText)
  //       || movie.subtitle.includes(searchText)
  //       || movie.storyline.includes(searchText));
  // }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.searchingText}
          onSearchTextChange={this.searchingText}
          onSelectedGenreChange={this.selectingGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
