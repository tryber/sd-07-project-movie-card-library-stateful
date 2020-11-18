import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  render() {
    const { onClick } = this.props;
    return (
      <div className="search-bar">
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title-input" data-testid="title-input-label">Título</label>
            <input
              data-testid="title-input"
              id="title-input"
              value={onClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.string }.isRequired;

export default AddMovie;
