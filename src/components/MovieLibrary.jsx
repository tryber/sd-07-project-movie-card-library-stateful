import React from 'react';
import PropTypes from 'prop-types';

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

    this.onChange = this.onChange.bind(this);
    this.handleAddNewMovie = this.handleAddNewMovie.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = name === 'bookmarkedOnly' ? target.checked : target.value;

    this.setState({ [name]: value });

    if (name === 'bookmarkedOnly') {
      this.setState({ movies: this.state.movies.filter((movie) => movie.bookmarked === true) });
    }

    if (name === 'selectedGenre') {
      this.setState({ movies: this.state.movies.filter((movie) => movie.genre === value) });
    }

    if (name === 'searchText') {
      this.setState({
        movies: this.state.movies.filter((movie) => (
          movie.title.includes(value)) ||
          movie.subtitle.includes(value) ||
          movie.storyline.includes(value),
        ),
      });
    }
  }

  handleAddNewMovie(movie) {
    this.setState({ movies: [...this.state.movies, movie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.onChange(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.onChange(event)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.onChange(event)}
        />

        <MovieList
          movies={movies}
        />

        <AddMovie
          onClick={this.handleAddNewMovie}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
