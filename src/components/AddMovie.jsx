// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleAdds = this.handleAdds.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleAdds(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    setInterval(this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })),10000);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle"
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              id="imagePath"
              type="text"
              name="imagePath"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
            <textarea
              id="storyline"
              type="text"
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
            <input
              id="rating"
              type="number"
              name="rating"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
            <select
              id="genre"
              name="genre"
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>

            </select>
          </label>
          <button data-testid="send-button" onClick={this.handleAdds}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
