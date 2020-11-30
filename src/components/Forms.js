import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchInput" data-testid="text-input-label">Inclui o texto:</label>
          <input
            id="searchInput"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
            data-testid="text-input"
          />
        </form>
      </div>
    );
  }
}

Forms.propTypes = {
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default Forms;
