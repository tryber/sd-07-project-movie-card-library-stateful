import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  buttonClick() {
    const { onClick } = this.props;
    onClick(this.state);

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.handleChange}
              data-testid="title-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              value={subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              value={rating}
              data-testid="rating-input"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={genre}
              onChange={this.handleChange}
              data-testid="genre-input"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
        <div>
          <button data-testid="send-button" onClick={this.buttonClick}>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
