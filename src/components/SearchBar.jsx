import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: ''
    });
  }

  onSearchTextChange(event) {
    console.log(event)
  }

   onBookmarkedChange(event) {
    console.log(event)
  }

   onSelectedGenreChange(event) {
    console.log(event)
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
