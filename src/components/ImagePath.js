import React, { Component } from 'react';

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

export default ImagePath;
