import PropsTypes from 'prop-types';
import React from 'react';

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

    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="Genre" data-testid="title-input-label">
            Título
            <input
              name="title"
              value={this.state.title}
              type="text"
              data-testid="title-input"
              onChange={this.handlerInput}
            />
          </label>
          <label htmlFor="Genre" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handlerInput}
            />
          </label>
          <label htmlFor="Genre" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              data-testid="image-input"
              type="text"
              value={this.state.imagePath}
              onChange={this.handlerInput}
            />
          </label>
          <label htmlFor="Genre" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handlerInput}
            />
          </label>
          <label htmlFor="Genre" data-testid="rating-input-label">
            Avaliação
            <input
              name="rating"
              data-testid="rating-input"
              type="number"
              value={this.state.rating}
              onChange={this.handlerInput}
            />
          </label>
          <label htmlFor="Genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              data-testid="genre-input"
              value={this.state.genre}
              onChange={this.handlerInput}
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
          </label>
        </form>
        <button
          data-testid="send-button"
          onClick={() => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          }}
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropsTypes.func.isRequired };
