// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.changeFilteredMovies = this.changeFilteredMovies.bind(this);
    this.handleNewMovie = this.handleNewMovie.bind(this);

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  changeFilteredMovies({ searchText, bookmarkedOnly, selectedGenre, movies }) {
    return movies
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked : movie))
      .filter((movie) => selectedGenre === '' || movie.genre === selectedGenre)
      .filter((movie) => ((movie.title
        .concat(movie.subtitle, movie.storyline))
        .toLowerCase())
        .includes((searchText).toLowerCase()) || searchText === '');
  }

  handleNewMovie(movie) {
    this.setState(({ movies }) => ({ movies: [...movies, movie] }));
  }

  // console.log('Aqui')
  // console.log(this.movies)

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.changeFilteredMovies(this.state)} />
        <AddMovie onClick={this.handleNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf.isRequired };

export default MovieLibrary;
