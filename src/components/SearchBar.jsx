import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">Inclui o texto:</label>
        <input id="text-input" type ="text" value={searchText} onChange={onSearchTextChange}
        data-testid="text-input" />

        <input data-testid="checkbox-input" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
        <label data-testid="checkbox-input-label" >Mostrar somente favoritos</label>
      </form>
    );
  }
}

export default SearchBar;
