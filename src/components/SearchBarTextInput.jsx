import React from 'react';
import PropTypes from 'prop-types';

class SearchBarTextInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <fieldset>
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          type="text"
          name="text-input"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
          id="text-input"
        />
      </fieldset>
    );
  }
}

SearchBarTextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarTextInput;
