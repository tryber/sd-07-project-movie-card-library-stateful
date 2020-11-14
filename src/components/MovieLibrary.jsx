import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovies from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.filterBookmarkedOnly = this.filterBookmarkedOnly.bind(this);
    this.filterSelectedGenre = this.filterSelectedGenre.bind(this);
    this.filterSearchText = this.filterSearchText.bind(this);
    this.filtersMovie = this.filtersMovie.bind(this);

    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  filterBookmarkedOnly(movie) {
    return this.state.bookmarkedOnly ? movie.bookmarked : movie;
  }

  filterSelectedGenre(movie) {
    return this.state.selectedGenre !== ''
      ? movie.genre.includes(this.state.selectedGenre)
      : movie;
  }

  filterSearchText(movie) {
    return this.state.searchText !== ''
      ? movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText)
      : movie;
  }

  filtersMovie({ movies }) {
    return movies
      .filter(this.filterBookmarkedOnly)
      .filter(this.filterSelectedGenre)
      .filter(this.filterSearchText);
  }

  handleAddMovie(movie) {
    this.setState(({ movies }) => ({ movies: [...movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
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
        <MovieList movies={this.filtersMovie(this.state)} />
        <AddMovies onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
