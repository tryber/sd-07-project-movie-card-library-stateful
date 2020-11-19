/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({ [name]: value });
  }

  handleAddMovie(currentState) {
    // adicionar um filme. Precisa atualizar o estado de AddMovie
    let state = this.setState;
    state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.setState(state);

    console.log(currentState);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChangeSearch}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChangeSearch}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeSearch}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
