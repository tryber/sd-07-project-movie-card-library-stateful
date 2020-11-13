import React, { Component } from "react";

class Rating extends Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          className="movie-card-rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Rating;
