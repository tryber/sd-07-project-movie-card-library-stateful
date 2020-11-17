import React from 'react';
import PropTypes from 'prop-types';

const stateInicial = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = stateInicial;
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addNewMovie(callback) {
    callback(this.state);
    this.setState(stateInicial);
  }

  render() {
    const { onClick } = this.props;

    return (
      <form className="form-add-movie">

        <div>
          <label data-testid="title-input-label" htmlFor="titulo">Título</label>
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.HandleChange}
            id="titulo"
          />
        </div>

        <div>
          <label data-testid="subtitle-input-label" htmlFor="subtitulo">Subtítulo</label>
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.HandleChange}
            id="subtitulo"
          />
        </div>

        <div>
          <label data-testid="image-input-label" htmlFor="imagem">Imagem</label>
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.HandleChange}
            id="imagem"
          />
        </div>

        <div>
          <label data-testid="storyline-input-label" htmlFor="sinpse">Sinopse</label>
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.HandleChange}
            id="imagem"
          />
        </div>

        <div>
          <label data-testid="rating-input-label" htmlFor="avaliacao">Avaliação</label>
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.HandleChange}
            id="avaliacao"
          />
        </div>

        <div>
          <label data-testid="genre-input-label" htmlFor="genero">Gênero</label>
          <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.HandleChange}
            htmlFor="genero"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            data-testid="send-button"
            onClick={(item) => {
              item.preventDefault();
              this.addNewMovie(onClick);
            }}
          >Adicionar filme
          </button>
        </div>

      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
