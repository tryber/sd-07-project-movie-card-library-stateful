import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <form data-testid="search-bar-form">
        <label htmlFor="text-input">
          <span>Inclui o texto: </span>
          <input type="text" name="searchText" id="text-input" data-testid="text-input" />
        </label>
        <label htmlFor=""></label>
      </form>
    );
  }
}

export default SearchBar;
