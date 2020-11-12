// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <label data-testid="title-input-label">Título
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChanges}
          />
        </label>

        <label data-testid="subtitle-input-label">Subtítulo
          <input
            name="subtitle"
            type="text"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleChanges}
          />
        </label>

        <label data-testid="image-input-label">Imagem
          <input
            name="imagePath"
            type="text"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleChanges}
          />
        </label>

        <label data-testid="storyline-input-label">Sinopse
          <textarea
            name="storyline"
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.handleChanges} />
        </label>

        <label data-testid="rating-input-label">Avaliação
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            ata-testid="rating-input"
            onChange={this.handleChanges}
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
