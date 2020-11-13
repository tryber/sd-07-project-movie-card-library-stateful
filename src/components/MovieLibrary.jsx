import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBookMarkedChange = this.onBookMarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState(() => ({ movies: [...movies, movie] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filterMovies = (value.length === 0) ? movies.filter((movie) => (
      (movie.title.includes(target) || movie.subtitle.includes(target))
    ),
    ) : movies;

    this.setState({
      searchText: value,
      movies: filterMovies,
    });
  }

  onBookMarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.state;
    const filterMovies = (checked) ? this.setState(
      { movies: movies.filter((movie) => movie.bookmarked === true) },
      ) : movies;

    this.setState({
      bookmarkedOnly: true,
      movies: filterMovies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          SearchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookMarkedChange={this.onBookMarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
