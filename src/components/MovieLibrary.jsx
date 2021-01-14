import React from 'react';
import Proptypes from 'prop-types';
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
      movies: props.movies,
    };

    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  searchTextChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const showMovie = (value !== 'undefined') ? movies.filter((movie) => movie.title.includes(value)
    || movie.subtitle.includes(value)
    || movie.storyline.includes(value)) : movies;
    this.setState({
      searchText: value,
      movies: showMovie,
    });
  }

  bookmarkedOnlyChange({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    const favoriteMovies = (checked) ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState({
      bookmarkedOnly: checked,
      movies: favoriteMovies,
    });
  }

  selectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const genreMovies = (value !== '') ? movies.filter((movie) => movie.genre === value) : movies;

    this.setState({
      selectedGenre: value,
      movies: genreMovies,
    });
  }

  addNewMovie(movie) {
    this.setState((estadoAnterior) => ({ movies: [...estadoAnterior.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h1>Movie Library</h1>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.searchTextChange}
          onBookmarkedChange={this.bookmarkedOnlyChange}
          onSelectedGenreChange={this.selectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: Proptypes.array.isRequired };

export default MovieLibrary;
