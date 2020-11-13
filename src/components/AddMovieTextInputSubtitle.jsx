import React from 'react';

class AddMovieTextInputSubtitle extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
        <input 
          type="text" 
          name="subtitle-input"
          data-testid="subtitle-input"
        //   value={this.props} 
          // onChange={}
        />
      </fieldset>
    );
  }
}

export default AddMovieTextInputSubtitle