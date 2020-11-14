import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label for="text-input" data-testid="text-input-label">Inclui o texto:</label>
          <input type="text" value="searchText" onChange="onSearchTextChange" data-testid="text-input" />
        </form>
      </div>
    );
  }
}
export default Form;
