// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import data from '../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.filterMovies = this.filterMovies.bind(this);
    this.filterByText = this.filterByText.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState(() => ({ searchText: value }));
    this.filterByText(value);
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    if (checked) {
      this.setState(() => ({ bookmarkedOnly: checked }));
    } else {
      this.setState(() => ({ bookmarkedOnly: checked }));
    }
    this.filterMovies(checked);
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
    let filterByGenre = movies;
    if (value) {
      filterByGenre = movies.filter((movie) => value === movie.genre);
    }
    this.setState(() => ({
      selectedGenre: value,
      movies: filterByGenre,
    }));
  }

  handleAddMovie(addMovieState) {
    const newMovie = addMovieState;
    const { movies } = this.props 
    movies.push(newMovie);

    this.setState(() => ({ movies: movies }));
  }

  filterByText(parameter) {
    const movies = this.props.movies;
    let filtered = movies;
    const filterByTitle = movies.filter((movie) => movie.title.indexOf(parameter) > 0);
    const filterBySubTitle = movies.filter((movie) => movie.subtitle.indexOf(parameter) > 0);
    const filterByStory = movies.filter((movie) => movie.storyline.indexOf(parameter) > 0);

    if (filterByTitle.length > 0) filtered = filterByTitle;

    if (filterBySubTitle.length > 0) filtered = filterBySubTitle;

    if (filterByStory.length > 0) filtered = filterByStory;

    this.setState(() => ({ movies: filtered }));
  }

  filterMovies(parameter) {
    const { movies } = this.state;
    let filtered = this.props.movies;
    if (parameter) {
      filtered = movies.filter((movie) => parameter === movie.bookmarked);
    }
    this.setState(() => ({ movies: filtered }));
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
