/* import React from 'react';

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
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerInput({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handlerClick(value) {
    this.props.onClick(value);
    this.state.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'ction',
    });
  }
  render() {
    return (
      <form>
        <label data-testid="title-input-label">
          Título
          <input
            name="title"
            value={this.state.title}
            type="text"
            data-testid="title-input"
            onChange={this.handlerInput}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={this.state.subtitle}
            onChange={this.handlerInput}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={this.state.imagePath}
            onChange={this.handlerInput}
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handlerInput}
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={this.state.rating}
            onChange={this.handlerInput}
          />
        </label>
        <label data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={this.state.genre}
            onChange={this.handlerInput}
          >
            <option data-testid="genre-option" value="action">
              Acão
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={() => this.handlerClick(this.state)}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie; */
