// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" for="texto">
        Inclui o texto:
          <input data-testid="text-input" id="texto" type="text" onChange={this.onSearchTextChange} />
        </label>
      </form>
    );
  }
}

export default SearchBar;
