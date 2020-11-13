import React from 'react';

class SearchBarCheckbox extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="text-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
        </label>
        <input
          type="checkbox"
          name=""
          checked={this.bookmarkedOnly}
          onChange={this.onBookmarkedChange}
          data-testid="checkbox-input"
        />
      </fieldset>
    );
  }
}

export default SearchBarCheckbox;
