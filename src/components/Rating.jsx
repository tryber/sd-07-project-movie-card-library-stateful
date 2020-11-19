import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating = 0 } = this.props;

    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number.isRequired };

Rating.defaultProps = { rating: 0.00 };

export default Rating;
