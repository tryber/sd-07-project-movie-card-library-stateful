import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, onClick } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={genre}
          name="genre"
          data-testid="genre-input"
          id="genre"
          onChange={onClick}
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Genre;
