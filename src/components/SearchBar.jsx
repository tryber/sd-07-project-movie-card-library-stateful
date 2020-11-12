// implement SearchBar component here
import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    
    return (
      <div className="search-bar">
        <form action="" data-testid="search-bar-form">

          <label htmlFor="" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
