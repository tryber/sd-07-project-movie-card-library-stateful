import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
            <input
              type="text"
              value="searchText"
              onChange="onSearchTextChange"
              data-testid="text-input"
              id="text-input"
            />
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
