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

    this.baseState = this.state;
    this.changeHandler = this.changeHandler.bind(this);
    this.sendButtonHandler = this.sendButtonHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: [event.target.value] });
  }

  sendButtonHandler() {
    this.setState(this.baseState);
    const { onClick } = this.props;
    onClick();
  }
  render() {
    return (
      <div className="search-bar">
        <form data-testid="add-movie-form">
          <div>
            <label htmlFor="title-input" data-testid="title-input-label">Título</label>
            <input
              name="title"
              data-testid="title-input"
              id="title-input"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label htmlFor="subtitle-input" data-testid="subtitle-input-label">Subtítulo</label>
            <input
              name="subtitle"
              data-testid="subtitle-input"
              id="subtitle-input"
              value={this.state.subtitle}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label htmlFor="image-input" data-testid="image-input-label">Imagem</label>
            <input
              name="imagePath"
              data-testid="image-input"
              id="image-input"
              value={this.state.imagePath}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
            <textarea
              name="storyline"
              data-testid="storyline-input"
              id="storyline-input"
              value={this.state.storyline}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
            <textarea
              type="number"
              name="rating"
              data-testid="rating-input"
              id="rating-input"
              value={this.state.rating}
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <label htmlFor="genre-input" data-testid="genre-input-label">Gênero</label>
            <select
              name="genre"
              data-testid="genre-input"
              id="genre-input"
              value={this.state.genre}
              onChange={this.changeHandler}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </div>

          <div>
            <button
              data-testid="send-button"
              onClick={this.sendButtonHandler}
            >Adicionar filme</button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequired;

export default AddMovie;
