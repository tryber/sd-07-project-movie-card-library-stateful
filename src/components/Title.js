import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor={"title-input"} data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={value}
          data-testid="title-input"
          onChange={handleChange}
        />
      </label>
    );
  }
}
Title.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func  
}

export default Title;
