import React, { Component } from 'react';
import Forms from './Forms';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Forms searchText={this.props.searchText} onSearchTextChange={this.props.onSearchTextChange} />
      </div>);
  }
}

export default SearchBar;
