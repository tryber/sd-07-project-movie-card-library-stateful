import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input
            id="title-input"
            data-testid="title-input"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }
}

AddMovie.defaultProps = { handleChange: PropTypes.func };

AddMovie.propTypes = { handleChange: PropTypes.func };

export default AddMovie;
