import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { searchText } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
            <input
              type="text"
              value={searchText}
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

Form.protoType = { searchText: PropTypes.string };

export default Form;
