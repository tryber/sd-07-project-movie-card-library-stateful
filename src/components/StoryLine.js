import React, { Component } from 'react';

class StoryLine extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor={'storyline-input'} data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={value}
          data-testid="storyline-input"
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default StoryLine;
