import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label html={"subtitle-input"} data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={value}
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Subtitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func  
}
export default Subtitle;
