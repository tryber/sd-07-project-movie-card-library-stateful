// implement MovieLibrary component here
import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      if (this.state.searchText !== '') {
        const filteredTextMovies = this.props.movies.filter(
          (movie) =>
            movie.title.includes(this.state.searchText) ||
            movie.subtitle.includes(this.state.searchText) ||
            movie.storyline.includes(this.state.searchText),
        );
        this.setState({ movies: filteredTextMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => {
      if (this.state.bookmarkedOnly) {
        const filteredBookmarkedMovies = this.props.movies.filter(
          (movie) => movie.bookmarked === this.state.bookmarkedOnly,
        );
        this.setState({ movies: filteredBookmarkedMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      if (target.value !== '') {
        const filteredGenreMovies = this.props.movies.filter(
          (movie) => movie.genre === target.value,
        );
        this.setState({ movies: filteredGenreMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onClick(movie) {
    this.setState((prevState) => ({ movies: [...prevState.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
