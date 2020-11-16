import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handelValue = this.handelValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  handelValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          <label
            data-testid="title-input-label"
            htmlFor="title-input"
          >Título
          </label>
          <input
            name="title"
            id="title-input"
            type="text"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handelValue}
          />
        </div>
        <div>
          <label
            data-testid="subtitle-input-label"
            htmlFor="subtitle-input"
          >Subtítulo
         </label>
          <input
            name="subtitle"
            id="subtitle-input"
            type="text"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handelValue}
          />
        </div>
        <div>
          <label
            data-testid="image-input-label"
            htmlFor="image-input"
          >Imagem
          </label>
          <input
            name="imagePath"
            id="image-input"
            type="text"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handelValue}
          />
        </div>
        <div>
          <label
            data-testid="storyline-input-label"
            htmlFor="storyline-input"
          >Sinopse
          </label>
          <input
            name="storyline"
            id="storyline-input"
            type="textarea"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handelValue}
          />
        </div>
        <div>
          <label
            data-testid="rating-input-label"
            htmlFor="rating-input"
          >Avaliação
          </label>
          <input
            name="rating"
            id="rating-input"
            type="number"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handelValue}
          />
        </div>
        <div>
          <label
            data-testid="genre-input-label"
            htmlFor="genre-input"
          >Gênero
          </label>
          <select
            id="genre-input"
            data-testid="genre-input"
            name="genre"
            value={this.state.genre}
            onChange={this.handelValue}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </div>
        <button data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { handelValue: PropTypes.func.isRequired };
