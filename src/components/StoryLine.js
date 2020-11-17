import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
StoryLine.defaultProps = { value: '', handleChange: () => undefined };
StoryLine.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default StoryLine;
