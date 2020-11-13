import React from 'react';

class Rating extends React.Component {
  render() {
    const p = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{p.rating}</span>
      </div>
    );
  }
}

export default Rating;
