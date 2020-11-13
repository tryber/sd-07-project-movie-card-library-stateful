import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input
            data-testid="title-input"
            onChange={this.handleChange}
            value={this.state.title}
          >
          </input>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            data-testid="subtitle-input"
            onChange={this.handleChange}
            value={this.state.subtitle}
          >
          </input>
          <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
          <input
            data-testid="image-input"
            onChange={this.handleChange}
            value={this.state.imagePath}
          >
          </input>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
          <input
            data-testid="storyline-input"
            onChange={this.handleChange}
            value={this.state.storyline}
          >
          </input>
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
