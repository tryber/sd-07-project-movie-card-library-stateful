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
    }

    this.onChange = this.onChange.bind(this);
    this.handleAddNewMovie = this.handleAddNewMovie.bind(this);
  }

  handleAddNewMovie(movie) {
    this.setState({ movies: [...this.state.movies, movie] });
  }

  onChange({ target }) {
    const { movies } = this.state;

    const { name } = target;
    const value = name === 'bookmarkedOnly' ? target.checked : target.value;

    this.setState({ [name]: value });

    if (name === 'bookmarkedOnly') {
      this.setState({
        movies: movies.filter(movie => movie.bookmarked === true)
      });
    }

    if (name === 'selectedGenre') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === value)
      });
    }

    if (name === 'searchText') {
      this.setState({
        movies: movies.filter((movie) => (
          movie.title.includes(value)) || movie.subtitle.includes(value) || movie.storyline.includes(value)
        )
      })
    }
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

MovieLibrary.propTypes = { movies: PropTypes.array }

export default MovieLibrary;
