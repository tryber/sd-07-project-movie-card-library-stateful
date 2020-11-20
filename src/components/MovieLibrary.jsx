// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.handleMovieFilter = this.handleMovieFilter.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
// -----------------------------------------------------------------
  searchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  bookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  selectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  handleMovieFilter() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let filteredMovies = movies.filter(
      (movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText)
       );      
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
      
    return filteredMovies;
  }

  addNewMovie(movie) {
    this.setState((previous) => ({ movies: [...previous.movies, movie] }));
  }
// -----------------------------------------------------------------
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.selectedGenreChange}
        />

        <MovieList movies={this.handleMovieFilter()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieLibrary;
