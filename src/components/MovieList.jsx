import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = {
  movies: [{
    title: 'NO MOVIE TITLE',
    subtitle: 'NO MOVIE SUBTITLE',
    storyline: 'NO MOVIE SINOPSE',
    imagePath: 'NO IMAGE',
    rating: 0.0,
  }],
};

export default MovieList;
