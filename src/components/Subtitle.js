import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onClick } = this.props;
    return (
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
      <input
        id="subtitle"
        name="subtitle"
        data-testid="subtitle-input"
        value={subtitle}
        type="text"
        onChange={onClick}
      />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Subtitle;
