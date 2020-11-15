// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form action='' data-testid="search-bar-form">
          <label htmlFor="">
            <input
              type="text"
              name=""
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
              id=""
            />
          </label>
        </form>
      </div>
    );
  }
}
