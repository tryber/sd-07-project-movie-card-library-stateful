import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label htmlFor="text" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" data-testid="text-input" value={searchText} onChange={onSearchTextChange} />
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
