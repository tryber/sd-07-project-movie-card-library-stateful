import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;

export const movieShape = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

MovieCard.propTypes = { movie: propTypes.shape(movieShape).isRequired };
