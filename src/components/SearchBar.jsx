// implement SearchBar component here
import React from 'react'

export class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props
    return (
      <div>
        <label data-testid="text-input-label">Inclui o texto:</label>
        <div>
          <input type="text" name="text"
          value={searchText} 
          onChange={onSearchTextChange} />
        </div>
      </div>
    )
  }
}

export default SearchBar
