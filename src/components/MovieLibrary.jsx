import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onClick = this.onClick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  onClick(movie) {
    this.setState((oldState) => ({ movies: [...oldState.movies, movie] }));
  }

  changeHandler({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  movieFilter() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtered = movies;
    if (bookmarkedOnly) {
      filtered = filtered
      .filter((movie) => bookmarkedOnly === movie.bookmarked);
    }
    if (selectedGenre) {
      filtered = filtered
      .filter((movie) => selectedGenre === movie.genre);
    }
    filtered = filtered
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
        || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
        || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));

    return filtered;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeHandler}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.changeHandler}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeHandler}
        />
        <MovieList movies={this.movieFilter()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
