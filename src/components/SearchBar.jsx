// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="for" data-testid="text-input-label">
        Inclui o texto:
          <input data-testid="text-input"
            id="for"
            type="text" 
            value={searchText} 
            onChange={onSearchTextChange} 
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
