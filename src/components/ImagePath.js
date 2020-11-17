import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor={'image-input'} data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={value}
          data-testid="image-input"
          onChange={handleChange}
        />
      </label>
    );
  }
}
ImagePath.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
export default ImagePath;
