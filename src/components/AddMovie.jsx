import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <fildser>
          <label data-testid="title-input-label">Título</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            data-testid="title-input"
            type="text"
          />
        </fildser>

        <fildser>
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.handleChange}
            data-testid="subtitle-input"
            type="text"
          />
        </fildser>

        <fildser>
          <label data-testid="image-input-label">Imagem</label>
          <input
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.handleChange}
            data-testid="image-input"
            type="text"
          />
        </fildser>

        <fildser>
          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea
            name="storyline"
            value={this.state.storyline}
            onChange={this.handleChange}
            data-testid="storyline-input"
            type="text"
          ></textarea>
        </fildser>

        <fildser>
          <label data-testid="rating-input-label">Avaliação</label>
          <input
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
            data-testid="rating-input"
            type="number"
          />
        </fildser>

        <fieldset>
          <label data-testid="genre-input-label">Gênero</label>
          <select
            name="genre"
            data-testid="genre-input"
            onChange={this.handleChange}
            type="select"
            value={this.state.genre}
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </fieldset>

        <button
          type="button"
          data-testid="send-button"
          onClick={this.handleOnSubmit}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
