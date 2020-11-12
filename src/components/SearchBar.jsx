import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
     return (
       <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
       Inclui o texto
        <input data-testid="text-input" type="text" name="" id="" />
       </label>
      </form>);
   }
}

export default SearchBar;
