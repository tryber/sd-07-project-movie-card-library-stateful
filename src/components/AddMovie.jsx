import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stateReset = this.stateReset.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  stateReset() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.stateReset();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            value={title}
            type="text"
            id="title"
            data-testid="title-input"
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            id="image-input"
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="storyline-input"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            id="storyline-input"
            data-testid="storyline-input"
            name="storyline"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="rating-input"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            id="rating-input"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={rating}
            onChange={this.handleChange}
          />
        </label>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="genre-input"
            name="genre"
            data-testid="genre-input"
            value={genre}
            onChange={this.handleChange}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={this.handleClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
export default AddMovie;
