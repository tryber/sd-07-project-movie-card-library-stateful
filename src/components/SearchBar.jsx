// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <form data-testid="search-bar-form">
        <label name="text" data-testid="text-input-label">"Inclui o texto:"</label>
        <input type="text" data-testid="text-input" name="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}/>
      </form>
    );
  }
}

export default SearchBar;
