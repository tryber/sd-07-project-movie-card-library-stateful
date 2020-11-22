// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.handlebookmarkedOnlyChange = this.handlebookmarkedOnlyChange.bind(this);
    this.filterObjectMovies = this.filterObjectMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(state) {
    const movie = state;
    const { movies } = this.state;
    this.setState({ movies: [...movies, movie] });
  }

  handleSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  handlebookmarkedOnlyChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  handleSearchChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  filterObjectMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    const searchMovie = movies.filter((movie) => (
      movie.title.toUpperCase().includes(searchText.toUpperCase())
      || movie.subtitle.toUpperCase().includes(searchText.toUpperCase())
      || movie.storyline.toUpperCase().includes(searchText.toUpperCase())));

    if (bookmarkedOnly === true && selectedGenre !== '') {
      return searchMovie
        .filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === selectedGenre);
    }

    if (bookmarkedOnly === true) {
      return searchMovie.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      return searchMovie.filter((movie) => movie.genre === selectedGenre);
    }

    return searchMovie;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleSearchChange}
          onBookmarkedChange={this.handlebookmarkedOnlyChange}
          onSelectedGenreChange={this.handleSelectedGenreChange}
        />
        <MovieList movies={this.filterObjectMovies()} />
        <AddMovie addNewMovie={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieLibrary;
