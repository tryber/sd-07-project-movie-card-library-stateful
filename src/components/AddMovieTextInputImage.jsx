import React from 'react';

class AddMovieTextInputImage extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
        <input
          type="text"
          name="image-input"
          data-testid="image-input"
          id="image-input"
          // value={this.props}
          // onChange={}
        />
      </fieldset>
    );
  }
}

export default AddMovieTextInputImage;
