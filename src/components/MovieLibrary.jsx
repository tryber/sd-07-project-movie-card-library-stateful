import PropTypes from 'prop-types';
import React from 'react';
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
    this.handlerInputMovieLibrary = this.handlerInputMovieLibrary.bind(this);
    this.check = this.check.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.checkFavorite = this.checkFavorite.bind(this);
  }

  checkFavorite() {
    const { movies } = this.props;
    if (this.state.bookmarkedOnly === true) {
      return movies.filter((item) => item.bookmarked === true);
    }
    return movies;
  }
  check() {
    this.setState({
      movies: this.checkFavorite()
        .filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(this.state.searchText.toLowerCase()) ||
            item.subtitle
              .toLowerCase()
              .includes(this.state.searchText.toLowerCase()) ||
            item.storyline
              .toLowerCase()
              .includes(this.state.searchText.toLowerCase()),
        )
        .filter((item2) => item2.genre.includes(this.state.selectedGenre)),
    });
  }

  addMovie(movie) {
    this.setState((allMovies) => ({ movies: [...allMovies.movies, movie] }));
  }
  handlerInputMovieLibrary({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.check());
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handlerInputMovieLibrary}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handlerInputMovieLibrary}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handlerInputMovieLibrary}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

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
