import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          value={this.title}
          id="title"
          name="title"
          data-testid="title-input"
          onChange={this.handleChange}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          value={this.subtitle}
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={this.handleChange}
        />
        <label htmlFor="imagePath" data-testid="image-input-label">Imagem</label>
        <input
          value={this.imagePath}
          id="imagePath"
          name="imagePath"
          data-testid="image-input"
          onChange={this.handleChange}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
        <input
          value={this.storyline}
          id="storyline"
          name="storyline"
          data-testid="storyline-input"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddMovie;
