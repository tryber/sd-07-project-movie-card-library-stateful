import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  onSearchTextChange = event => {
    return 'teste'
  }

   onBookmarkedChange = event => {
    return 'teste'
  }

   onSelectedGenreChange = event => {
    return 'teste'
  }

  render() {
    return (
      <form>
        <label data-testid="text-input-label">
          Inclui o texto
        </label>
        <input data-testid="text-input" 
          value="searchText" 
          type="text" 
          onChange={this.onSearchTextChange}
          />
        <input type="text" />
        <label>Filtrar por gênero</label>
        <input type="text" / >
      </form>
    );
  }
}

export default SearchBar;
