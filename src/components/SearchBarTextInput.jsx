import React from 'react';

class SearchBarTextInput extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text"
          name="text-input"
          value={this.searchText}
          onChange={this.onSearchTextChange}
          data-testid="text-input"
        />
      </fieldset>
    );
  }
}

export default SearchBarTextInput;
