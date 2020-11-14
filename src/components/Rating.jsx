import React from 'react';
import Proptypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: Proptypes.number.isRequired };

export default Rating;
