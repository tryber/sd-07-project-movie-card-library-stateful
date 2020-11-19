import React from 'react';
import PropTypes from 'prop-types';

class SearchBarSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <fieldset>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
        </label>
        <select
          name="select-input"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          data-testid="select-input"
          id="select-input"
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </fieldset>
    );
  }
}

SearchBarSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBarSelect;
