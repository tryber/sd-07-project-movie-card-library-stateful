// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeThings = this.changeThings.bind(this);
    this.toAdd = this.toAdd.bind(this);
    // funções normais precisam do bind
    // estado inicial
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  // atualizando estado de forma dinâmica usando o name como key
  changeThings(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  // resetando para o estado inicial
  toAdd() {
    // recebe o onClick como props e o this.state representa o estado atual que será modificado
    this.props.onClick(this.state);
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
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.changeThings}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.changeThings}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.changeThings}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={this.state.storyline}
            onChange={this.changeThings}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={this.state.rating}
            onChange={this.changeThings}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.changeThings}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.toAdd}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
