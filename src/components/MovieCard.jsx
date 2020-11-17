import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating = 0, imagePath, bookmarked } = movie;
    const newRating = parseFloat(rating);

    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating
          movieTitle={title}
          rating={newRating}
          bookmarked={bookmarked}
        />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    rating: PropTypes.number,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
