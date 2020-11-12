import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    // retirar gambiarra quando feito protoType
    const prop = this.props;
    return (
      <form id="search-bar-form" data-testid="search-bar-form" >
        <label htmlFor="text-input" data-testid="text-input-label" >
          Inclui o texto:
        </label>
        <input
          value="searchText"
          data-testid="text-input"
          onChange={(e) => prop.onSearchTextChange(e.target.value)}
        />
      </form>
    );
  }
}
