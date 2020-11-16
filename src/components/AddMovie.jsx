// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.forms = this.forms.bind(this);
    this.button = this.button.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  forms({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  button() {

  }
  render() {
    return (
      <div>
        <form>
          <br />
          <label
            htmlFor="title-input"
            data-testid="title-input-label"
          >
            Título
              <input
                id="title-input" data-testid="title-input" type="text" name="title"
                value={this.state.title}
                onChange={this.forms}
              />
          </label>
          <br />
          <label
            htmlFor="subtitle-input-label"
            data-testid="subtitle-input-label"
          >
            Subtítulo:
              <input
                id="subtitle-input-label" data-testid="subtitle-input" type="text"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.forms}
              />
          </label>
          <br />
          <label
            htmlFor="image-input"
            data-testid="image-input-label"
          >
            Imagem:
              <input
                id="image-input" data-testid="image-input" type="text" name="imagePath"
                value={this.state.imagePath}
                onChange={this.forms}
              />
          </label>
          <br />
          <label
            htmlFor="storyline-input-label"
            data-testid="storyline-input-label"
          >
            Sinopse
              <textarea
                id="storyline-input-label" data-testid="storyline-input" name="storyline"
                value={this.state.storyline}
                onChange={this.forms}
              />
          </label>
          <br />
          <label
            htmlFor="rating-input-label"
            data-testid="rating-input-label"
          >
            Avaliação
              <input
                id="rating-input-label" data-testid="rating-input" type="number" name="rating"
                value={this.state.rating}
                max="5"
                onChange={this.forms}
              />
          </label>
          <br />
          <label
            htmlFor="genre-input-label" data-testid="genre-input-label"
          >
            Gênero
              <select
                id="genre-input-label" data-testid="genre-input" name="genre"
                value={this.state.genre}
                onChange={this.forms}
              >
                <option
                  data-testid="genre-option" value="action"
                >Ação
              </option>
                <option
                  data-testid="genre-option" value="comedy"
                >Comédia
              </option>
                <option
                  data-testid="genre-option" value="thriller"
                >Suspense
              </option>
              </select>
          </label>
          <br />
          <button
            type="button" data-testid="send-button"
            onClick={() => this.props.button(this.state)}
          >Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { button: PropTypes.func.isRequired };

export default AddMovie;
