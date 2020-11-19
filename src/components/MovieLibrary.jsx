/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

const initialState = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
  movies: this.props.movies,
};

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleAddMovie(currentState) {
    // adicionar um filme. Precisa atualizar o estado de AddMovie
    this.setState(initialState);
    console.log(currentState);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.updateStatus}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}


export default MovieLibrary;
