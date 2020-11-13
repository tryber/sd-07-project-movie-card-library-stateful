import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.handelListMovies = this.handelListMovies.bind(this);
    this.handelListBookmarked = this.handelListBookmarked.bind(this);
    this.handelListGenre = this.handelListGenre.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }
  onSearchTextChange(event) {
    const { value } = event.target;
    return this.setState({ searchText: value }, () => this.handelListMovies());
  }
  onBookmarkedChange(event) {
    const { checked } = event.target;
    return this.setState({ bookmarkedOnly: checked }, () => this.handelListBookmarked());
  }
  onSelectedGenreChange(event) {
    const { value } = event.target;
    return this.setState({ selectedGenre: value }, () => this.handelListGenre());
  }
  handelListMovies() {
    const { searchText, movies } = this.state;
    if (searchText) {
      const listaFiltrada = movies.filter((movie) =>
      (movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText)));
      return this.setState({ movies: listaFiltrada });
    } return this.setState({ movies: this.props.movies });
  }
  handelListBookmarked() {
    const { bookmarkedOnly, movies } = this.state;
    if (bookmarkedOnly === true) {
      const listaFiltrada = movies.filter((movie) => movie.bookmarked === true);
      return this.setState({ movies: listaFiltrada });
    } return this.setState({ movies: this.props.movies });
  }

  handelListGenre() {
    const { selectedGenre, movies } = this.state;
    if (selectedGenre) {
      const listaFiltrada = movies.filter((movie) => movie.genre === selectedGenre);
      return this.setState({ movies: listaFiltrada });
    } return this.setState({ movies: this.props.movies });
  }

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
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired };
