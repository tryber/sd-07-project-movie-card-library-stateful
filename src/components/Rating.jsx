import React, { Component } from 'react';
import PopTypes from 'prop-types';

class Rating extends Component {

  render() {
    const { rating } = this.props;

    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = { rating: PopTypes.number.isRequired };

Rating.defaultValue = { rating: 0.00 };

export default Rating;
