// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

  fncClick(callBack) {
    callBack(this.state); // checar se isso é isso mesmo!!!
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="title" data-testid="title-input-label">Título
            <input
              name="title"
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleChanges}
            />
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo
            <input
              name="subtitle"
              type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChanges}
            />
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">Imagem
            <input
              name="imagePath"
              type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleChanges}
            />
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChanges}
            />
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              ata-testid="rating-input"
              onChange={this.handleChanges}
            />
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
          <select
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleChanges}
          >
            <option ata-testid="genre-option" value="action">Ação</option>
            <option ata-testid="genre-option" value="comedy">Comédia</option>
            <option ata-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </form>

        <button
          onClick={() => this.fncClick(onClick)}
          data-testid="send-button"
        >Adicionar filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func };

AddMovie.defaultProps = { onClick: '' };

export default AddMovie;
