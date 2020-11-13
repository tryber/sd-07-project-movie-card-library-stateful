import React from 'react';

class AddMovieTextArea extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          type="text"
          name="storyline-input"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          // value={this.props}
          // onChange={}
        />
      </fieldset>
    );
  }
}

export default AddMovieTextArea;
