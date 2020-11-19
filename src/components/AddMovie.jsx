import React from 'react';
import PropTypes from 'prop-types';

class AddMovies extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnChange({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;
    this.setState({ [name]: value });
  } // Ver cont dia 12.2 event handler genérico

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
          Título
            <input
              id="title-input"
              data-testid="title-input"
              name="title"
              value={title}
              onChange={this.handleOnChange}
              type="text"
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
            <input
              id="subtitle-input"
              data-testid="subtitle-input"
              name="subtitle"
              value={subtitle}
              onChange={this.handleOnChange}
              type="text"
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
            <input
              id="image-input"
              data-testid="image-input"
              name="imagePath"
              value={imagePath}
              onChange={this.handleOnChange}
              type="text"
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
            <textarea
              id="storyline-input"
              data-testid="storyline-input"
              name="storyline"
              value={storyline}
              onChange={this.handleOnChange}
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
            <input
              id="rating-input"
              data-testid="rating-input"
              name="rating"
              value={rating}
              onChange={this.handleOnChange}
              type="number"
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
            <select
              id="genre-input"
              data-testid="genre-input"
              name="genre"
              value={genre}
              onChange={this.handleOnChange}
              type="checkbox"
            >
              <option data-testid="genre-option" value="action">
                Ação
              </option>
              <option data-testid="genre-option" value="comedy">
                Comédia
              </option>
              <option data-testid="genre-option" value="thriller">
                Suspense
              </option>
            </select>
          </label>
          <button
            id="send-button"
            type="button"
            data-testid="send-button"
            onClick={() => {
              console.log(this.props);
              this.props.onClick(this.state);
              this.setState({
                subtitle: '',
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action',
              });
            }}
          >Adicionar filme</button>
        </form>
      </div>
    );
  }
}

AddMovies.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovies;
