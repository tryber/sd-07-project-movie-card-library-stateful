import React from 'react';
import Proptype from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
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

  slectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const genreMovies = (value !== '') ? movies.filter((movie) => movie.genre === value) : movies;

    this.setState({
      selectedGenre: value,
      movies: genreMovies,
    });
  }

  AddNewMovie(movie) {
    this.setState((estadoAnterior) => ({ movies: [...estadoAnterior.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h1>Movie Library</h1>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.searchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedOnlyChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.slectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.AddNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: Proptype.arrayOf(PropTypes.number).isRequired };

export default MovieLibrary;
