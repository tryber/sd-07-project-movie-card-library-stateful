import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, onClick } = this.props;
    return (
     <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
      <textarea
        id="storyline"
        name="storyline"
        data-testid="storyline-input"
        value={storyline}
        type="textarea"
        onChange={onClick}
      />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Storyline;
