import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }
  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      const selectedGenreMovies = this.props.movies.filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.subtitle
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.storyline
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()),
      );
      this.setState({ movies: selectedGenreMovies });
    });
  }
  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: target.checked,
      movies:
        checked === null
          ? this.props.movies
          : this.props.movies.filter((element) => element.bookmarked),
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: target.value,
      movies:
        value === null
          ? this.props.movies
          : this.props.movies.filter((element) => element.genre === value),
    });
  }
  onClick(movie) {
    this.setState(() => ({ movies: this.state.movies.concat(movie) }));
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.defaultProps = { movies: [] };
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

export default MovieLibrary;
