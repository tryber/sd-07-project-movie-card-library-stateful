import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.resetAndSendState = this.resetAndSendState.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  resetAndSendState() {
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
      <div>
        <form
          data-testid="add-movie-form"
          action=""
          method="get"
        >
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              name="title"
              data-testid="title-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
            Subtítulo
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="image-input-label" htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              name="imagePath"
              type="text"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <textarea
              data-testid="storyline-input"
              name="storyline"
              value={this.state.storyline}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              type="number"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
           <select
             data-testid="genre-input"
             name="genre"
             value={this.state.genre}
             onChange={this.handleChange}
           >
             <option data-testid="genre-option" value="action">Ação</option>
             <option data-testid="genre-option" value="comedy">Comédia</option>
             <option data-testid="genre-option" value="thriller">Suspense</option>
           </select>
          </label>

          <button
            data-testid="send-button"
            type="button"
            onClick={this.resetAndSendState}
          >Adicionar filme</button>

        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
