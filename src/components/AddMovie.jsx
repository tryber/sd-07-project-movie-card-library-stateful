// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeInput = this.changeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              data-testid="title-input"
              id="title-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeInput}
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              data-testid="subtitle-input"
              id="subtitle-input"
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              onChange={this.changeInput}
            />
          </label>

          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              id="image-input"
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              onChange={this.changeInput}
            />
          </label>

          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            Sinopse
            <textarea
              data-testid="storyline-input"
              id="storyline-input"
              name="storyline"
              value={this.state.storyline}
              onChange={this.changeInput}
              rows="4"
              cols="50"
            />
          </label>

          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input
              data-testid="rating-input"
              id="rating-input"
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.changeInput}
            />
          </label>

          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <select
              data-testid="genre-input"
              id="genre-input"
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.changeInput}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

          <button
            data-testid="send-button"
            id="send-button"
            type="button"
            onClick={this.handleClick}
          >
            Adicionar filme
          </button>

        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
