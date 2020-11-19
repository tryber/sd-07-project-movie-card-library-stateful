// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.preventEvent = this.preventEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }

  preventEvent(event) {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
    event.preventDefault();
  }

  handleChange({ target }) {
    const { name, value } = target;
    // const value = target.type === '' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    return (
      <form id="form" data-testid="add-movie-form" action="" method="GET">
        <fieldset>
          <div>
            <label htmlFor="title" data-testid="title-input-label">Título</label>
            <input
              name="title"
              data-testid="title-input"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Digite o título do filme"
              maxLength="40"
              pattern="[A-zÀ-ÿ ]{1,}"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
            <input
              name="subtitle"
              data-testid="subtitle-input"
              type="text"
              value={this.state.subtitle}
              onChange={this.handleChange}
              placeholder="Digite o subtítulo do filme"
              maxLength="100"
              patern="[A-zÀ-ÿ ]{1,}"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="image" data-testid="image-input-label">Imagem</label>
            <input
              name="imagePath"
              data-testid="image-input"
              type="text"
              value={this.state.imagePath}
              onChange={this.handleChange}
              placeholder="Digite o link da imagem do filme"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="storyline" data-testid="storyline-input-label">Sinopse</label>
            <textarea
              name="storyline"
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleChange}
              placeholder="Escreva a sinopse do filme"
              maxLength="3000"
              cols="50"
              rows="20"
              pattern="[A-zÀ-ÿ0-9, ]{1,}"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="rating" data-testid="rating-input-label">Avaliação</label>
            <input
              name="rating"
              data-testid="rating-input"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={this.state.rating}
              onChange={this.handleChange}
              placeholder="Digite a avaliação do filme"
              required="required"
            />
          </div>
          <div>
            <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
            <select
              name="genre"
              data-testid="genre-input"
              value={this.state.genre}
              onChange={this.handleChange}
              required="required"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </div>
          <div>
            <button
              name="send"
              data-testid="send-button"
              value="1"
              type="submit"
              onClick={this.preventEvent}
            >Adicionar filme</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
