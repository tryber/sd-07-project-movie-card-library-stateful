import React from 'react';

class AddMovieInputRating extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
        <input
          type="number"
          name="rating-input"
          data-testid="rating-input"
          // onChange={}
          // value={this}
        />
      </fieldset>
    );
  }
}

export default AddMovieInputRating;
