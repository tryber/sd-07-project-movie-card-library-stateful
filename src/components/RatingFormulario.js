import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor={'rating-input'} data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={value}
          data-testid="rating-input"
          className="movie-card-rating"
          onChange={handleChange}
        />
      </label>
    );
  }
}

Rating.protoTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

export default Rating;
