import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor={'genre-input'} data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={value}
          data-testid="genre-input"
          onChange={handleChange}
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
Genre.defaultProps = { value: 'action' };

Genre.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
