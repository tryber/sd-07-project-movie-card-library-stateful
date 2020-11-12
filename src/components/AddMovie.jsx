import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
    this.addingMovie = this.addingMovie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  changeTitle(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addingMovie() {
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
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label"> Título
            <input
              type="text"
              data-testid="title-input"
              name="title"
              value={this.state.title}
              onChange={this.changeTitle}
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label"> Subtítulo
            <input
              type="text"
              name="subtitle"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.changeTitle}
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label"> Imagem
            <input
              type="text"
              value={this.state.imagePath}
              name="imagePath"
              data-testid="image-input"
              onChange={this.changeTitle}
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.changeTitle}
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label"> Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.changeTitle}
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label"> Gênero
            <select
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.changeTitle}
              name="genre"
            >
              <option
                data-testid="genre-option"
                value="action"
              >Ação</option>
              <option
                data-testid="genre-option"
                value="comedy"
              >Comédia</option>
              <option
                data-testid="genre-option"
                value="thriller"
              >Suspense</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          onClick={this.addingMovie}
        >Adicionar filme</button>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
