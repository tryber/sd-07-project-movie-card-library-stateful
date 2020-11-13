import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.addMovie = this.addMovie.bind(this);
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  changingTitleState = (event) => {
    const { name, valeu } = event.target;
    this.setState({
      [name]: valeu
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={title}
            data-testid="title-input"
            onChange={this.changingTitleState()}
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
