// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
      const { value, onSearchTextChange } = this.props
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="for" data-testid="text-input-label">
        Inclui o texto:
          <input 
            data-testid="text-input"
            id="for"
            type="text"
            value={value} 
            onChange={onSearchTextChange} 
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
