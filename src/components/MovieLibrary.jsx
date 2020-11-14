import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie.jsx';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';

export class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
    this.filterBySearchText = this.filterBySearchText.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  addMovie(movie) {
    this.setState((previousState) => ({ movies: previousState.movies.concat(movie) }));
  }

  filterBySearchText(movie) {
    const { searchText } = this.state;
    if (movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText)) {
      return true;
    }
    return false;
  }

  filterMovie() {
    const { bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => movie.bookmarked === true);
    }
    return filteredMovies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => this.filterBySearchText(movie));
  }

  handleEvent({ target }) {
    const { name } = target;
    const value = (name === 'bookmarkedOnly') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { handleEvent, addMovie, filterMovie } = this;
    return (
      <div>
        <SearchBar
          searchText={searchText} onSearchTextChange={handleEvent}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={handleEvent}
          selectedGenre={selectedGenre} onSelectedGenreChange={handleEvent}
        />
        <MovieList movies={filterMovie()} />
        <AddMovie onClick={addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf([]).isRequired };

export default MovieLibrary;
