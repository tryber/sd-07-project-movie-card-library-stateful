// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarked: false,
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleCard = this.handleCard.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleCard(event) {
    const { name, value } = event.target;
    this.setState(() => {
      let result;
      if (name === 'rating') {
        result = ({ [name]: Number(value) });
      } else {
        result = ({ [name]: value });
      }
      return result;
    });
  }

  async handleMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;

    this.setState((holdState) => {
      onClick(holdState);
      return ({
        title: '',
        subtitle: '',
        genre: '',
        imagePath: '',
        rating: 0,
        bookmarked: false,
        storyline: '',
      });
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form className="container-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            className="input-form"
            id="input-title"
            value={title}
            data-testid="title-input"
            onChange={this.handleCard}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
        Subtítulo
          <input
            name="subtitle"
            type="text"
            className="input-form"
            id="input-subtitle"
            data-testid="subtitle-input"
            value={subtitle}
            onChange={this.handleCard}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-image">
          Imagem
          <input
            name="imagePath"
            type="text"
            className="input-form"
            id="input-image"
            value={imagePath}
            data-testid="image-input"
            onChange={this.handleCard}
          />
        </label>
        <label htmlFor="text-area" data-testid="storyline-input-label">
        Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="3"
            className="text-area"
            id="text-area"
            value={storyline}
            data-testid="storyline-input"
            onChange={this.handleCard}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            step="0.1"
            max="10.0"
            min="0.00"
            name="rating"
            value={rating}
            className="input-form"
            onChange={this.handleCard}
            data-testid="rating-input"
          />
        </label>

        <label htmlFor="form-addMovie" data-testid="genre-input-label">
          Gênero:
          <select
            name="genre"
            id="form-addMovie"
            value={genre}
            data-testid="genre-input"
            onChange={this.handleCard}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          className="btn-sucess"
          type="submit"
          onClick={this.handleMovie}
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTyps = {
  handleCard: PropTypes.func.isRequired,
  handleMovie: PropTypes.func.isRequired,
  // onClick: PropTypes.func.isRequired,
};
export default AddMovie;
