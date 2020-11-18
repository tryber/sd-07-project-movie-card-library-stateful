import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
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
      <form data-testid="add-movie-form">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        > Título
          <input data-testid="title-input" />
        </label>

        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.handleChange}
        > Subtítulo
          <input data-testid="subtitle-input" />
        </label>

        <label
          htmlFor="image-input"
          data-testid="image-input-label"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.handleChange}
        > Imagem
          <input data-testid="image-input" />
        </label>

      </form>
    );
  }
}

export default AddMovie;
