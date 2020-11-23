import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
   const { value } = target;
   const { movies } = this.state;

   const filteredMovies = value !== '' ? movies.filter((movie) => movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value)) : movies;
   this.setState(() => ({
     searchText: value,
     movies: filteredMovies
   }))
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.state;

    const filteredMovies = checked ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState(() => ({
      bookmarkedOnly: checked,
      movies: filteredMovies
    }))
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.state;

    const filteredMovies = value !== '' ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState(() => ({
      selectedGenre: value,
      movies: filteredMovies,
    }));
  }

  addNewMovie(newMovie) {
    this.setState((statePrevius) => ({ movies: [...statePrevius.movies, newMovie] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
