import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  render() {
    return (
      <form action="" method="get">
        <label
          data-testid="title-input-label"
          htmlFor="title-input"
        > Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={this.state.title}
            onChange={this.handlerChange}
          />
        </label>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle-input"
        > Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handlerChange}
          />
        </label>
        <label
          data-testid="image-input-label"
          htmlFor="image-input"
        > Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.handlerChange}
        />
        </label>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        > Sinopse
          <input
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={this.state.storyline}
            onChange={this.handlerChange}
          />
        </label>
        <label
          data-testid="rating-input-label"
          htmlFor="rating-input"
        > Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.handlerChange}
          />
        </label>
        <label
          data-testid="genre-input-label"
          htmlFor="genre-input"
        > Gênero
          <select
            data-testid="send-button"
            onClick={this.props.onClick}
          >
            <option
              data-testid="genre-option"
              value="action"
            > Ação </option>
            <option
              data-testid="genre-option"
              value="comedy"
            > Comédia </option>
            <option
              data-testid="genre-option"
              value="thriller"
            > Suspense </option>
          </select>
        </label>
        <label htmlFor="send-button">
          <button
            data-testid="send-button"
            type="submit"
            onClick={this.props.onClick}
          > Adicionar filme </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
