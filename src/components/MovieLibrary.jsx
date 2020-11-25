import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.searchByTitleOrSubtitle = this.searchByTitleOrSubtitle.bind(this);
    this.searchByGenre = this.searchByGenre.bind(this);
    this.searchByBookmarked = this.searchByBookmarked.bind(this);
    this.updateMovieList = this.updateMovieList.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  searchByTitleOrSubtitle({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const afterFilter = value === '' ? movies : movies.filter((movie) => movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value));
    this.setState({ searchText: value, movies: afterFilter });
  }

  searchByGenre({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const afterFilter = value === '' ? movies : movies.filter((movie) => movie.genre === value);
    this.setState({ selectedGenre: value, movies: afterFilter });
  }

  searchByBookmarked({ target }) {
    const { checked } = target;
    const { movies } = this.state;
    const afterFilter = checked ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState({ bookmarkedOnly: checked, movies: afterFilter });
  }

  updateMovieList(movieToAdd) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movieToAdd] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.searchByTitleOrSubtitle}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.searchByBookmarked}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.searchByGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.updateMovieList} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) }.isRequired;

export default MovieLibrary;
