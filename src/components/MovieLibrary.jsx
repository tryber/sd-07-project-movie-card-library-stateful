import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
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
    const inputValue = target.value;
    const { movies } = this.props;

    this.setState({
      searchText: inputValue,
      movies: movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        return (
          title.toLowerCase().includes(inputValue.toLowerCase()) ||
          subtitle.toLowerCase().includes(inputValue.toLowerCase()) ||
          storyline.toLowerCase().includes(inputValue.toLowerCase())
        );
      }),
    });
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.props;
    const { checked } = target;

    let moviesFiltered = movies;

    if (checked) moviesFiltered = movies.filter((movie) => movie.bookmarked === checked);

    this.setState({
      bookmarkedOnly: checked,
      movies: moviesFiltered,
    });
  }

  onSelectedGenreChange({ target }) {
    const genre = target.value;
    const { movies } = this.props;

    this.setState({
      selectedGenre: genre,
      movies: movies.filter((movie) => movie.genre === genre),
    });
  }

  onClick(addMovie) {
    this.setState((previousState) => {
      const newMovie = [...previousState.movies, addMovie];
      return ({ movies: newMovie });
    });
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
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
