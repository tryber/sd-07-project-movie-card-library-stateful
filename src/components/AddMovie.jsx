import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

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

  handleChange({ target }) {
    console.log(target.value);
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
          </label>
          <input
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleChange}
            name="title"
          />
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleChange}
            name="subtitle"
          />
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
          </label>
          <input
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleChange}
            name="imagePath"
          />
        </div>
        <div>
          <label htmlFor="story-line" data-testid="storyline-input-label">
            Sinopse
          </label>
          <input
            type="textarea"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handleChange}
            name="storyline"
          />
        </div>
        <div>
          <label htmlFor="rating-number" data-testid="rating-input-label">
            Avaliação
          </label>
          <input
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleChange}
            name="rating"
            min="0.0"
            max="5.0"
            step="0.25"
          />
        </div>
        <div>
          <label htmlFor="gerne-label" data-testid="genre-input-label">
            Gênero
          </label>
          <select
            value={this.state.genre}
            onChange={this.handleChange}
            name="genre"
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">
              Ação
            </option>
            <option value="comedy" data-testid="genre-option">
              Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
              Suspense
            </option>
          </select>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
