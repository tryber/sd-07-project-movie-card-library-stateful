import React, { Component } from 'react';

import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = { movies: this.props.movies };
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

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired }; // Retirado de: https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/21/files#diff-f93a41729e61cd4c21f08e8fbbf630da87e14d18a479267fe157d29cafc00abc

export default MovieLibrary;
