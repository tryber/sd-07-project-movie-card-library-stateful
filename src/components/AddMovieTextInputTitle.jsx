import React from 'react';

class AddMovieTextInputTitle extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="title-input" data-testid="title-input-label">Título</label>
        <input 
          type="text" 
          name="title-input"
          data-testid="title-input" 
          // onChange={}
        />
      </fieldset>
    );
  }
}

export default AddMovieTextInputTitle