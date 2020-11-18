// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleSerchText = this.handleSerchText.bind(this);
    this.handlebookmarkedOnly = this.handlebookmarkedOnly.bind(this);
    this.handleSelectGender = this.handleSelectGender.bind(this);
    this.showFilterMovies = this.showFilterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleSerchText(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  handlebookmarkedOnly(event) {
    const { checked } = event.target;
    let status;
    if (checked) {
      status = true;
    } else {
      status = false;
    }
    this.setState(() => ({ bookmarkedOnly: status }));
  }

  handleSelectGender(event) {
    const valueOption = event.target.options[event.target.selectedIndex].value;
    this.setState(() => ({ selectedGenre: valueOption }));
  }

  showFilterMovies(searchText, bookmarkedOnly, selectedGenre, movies) {
    let movieList = movies;

    if (searchText) {
      movieList = movieList.filter(
        (actual) => actual.title.indexOf(searchText) !== -1
          || actual.subtitle.indexOf(searchText) !== -1
          || actual.storyline.indexOf(searchText) !== -1,
      );
    }

    if (bookmarkedOnly) {
      movieList = movieList.filter((actual) => actual.bookmarked === true);
    }

    if (selectedGenre !== '') {
      movieList = movieList.filter((actual) => actual.genre === selectedGenre);
    }

    return movieList;
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (
      searchText !== '' || bookmarkedOnly !== false
      || selectedGenre !== ''
    ) {
      movies = this.showFilterMovies(
        searchText,
        bookmarkedOnly,
        selectedGenre,
        movies,
      );
    }

    return (
      <div className="container">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSerchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handlebookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSelectGender}
        />

        <div className="movie-list">
          <MovieList movies={movies} />
        </div>
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
