// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
            Inclui o texto:
            <input data-testid="text-input" type="text" onChange={this.onSearchTextChange}></input>
          </label>
      </form>
    );
  }
}

export default SearchBar;
