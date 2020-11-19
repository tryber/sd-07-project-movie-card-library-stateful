import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = { movies: this.props.movies, };
  }

  onClick(newState) {
    const movieList = [...this.props.movies];
    movieList.push(newState);
    this.setState({ movies: movieList });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={this.state.movies} />
        <AddMovie addMovieToList={this.addMovieToList} />
      </div>
    );
  }
}

export default MovieLibrary;
