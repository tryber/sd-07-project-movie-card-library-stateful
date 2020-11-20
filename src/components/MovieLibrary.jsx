import React from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
