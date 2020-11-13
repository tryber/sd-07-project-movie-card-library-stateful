import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.addButtonClick = this.addButtonClick.bind(this);
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addButtonClick(event) {
    event.preventDefault();
    this.props.onClick(this.state);
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title-input" data-testid="title-input-label">Título</label>
            <input
              name="title"
              id="title-input"
              type="text"
              data-testid="title-input"
              value={title}
              onChange={this.onTextChange}
            />
          </div>

          <div>
            <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
            <input
              name="subtitle"
              id="subtitle-input"
              type="text"
              data-testid="subtitle-input"
              value={subtitle}
              onChange={this.onTextChange}
            />
          </div>

          <div>
            <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
            <input
              name="imagePath"
              id="image-input"
              type="text"
              data-testid="image-input"
              value={imagePath}
              onChange={this.onTextChange}
            />
          </div>

          <div>
            <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
            <input
              name="storyline"
              id="storyline-input"
              type="text"
              data-testid="storyline-input"
              value={storyline}
              onChange={(this.onTextChange)}
            />
          </div>

          <div>
            <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
            <input
              name="rating"
              id="rating-input"
              type="number"
              data-testid="rating-input"
              value={rating}
              onChange={(this.onTextChange)}
            />
          </div>

          <div>
            <label htmlFor="genre-input" data-testid="genre-input-label">Gênero</label>
            <select
              name="genre"
              id="genre-input"
              data-testid="genre-input"
              value={genre}
              onChange={this.onTextChange}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </div>

          <button onClick={this.addButtonClick} data-testid="send-button">Adicionar filme</button>

        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  // subtitle: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
  // imagePath: PropTypes.string.isRequired,
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  // genre: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
