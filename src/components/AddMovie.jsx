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
    this.updateState = this.updateState.bind(this);
    this.submit = this.submit.bind(this);
  }
  updateState(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }
  submit(event) {
    event.preventDefault();
    const newMovie = this.state;
    this.props.addNewMovie(newMovie);
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
      <form action="">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título{' '}
          <input
            id="title-input"
            type="text"
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.updateState}
          />
        </label>
        <br />
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo{' '}
          <input
            id="subtitle-input"
            type="text"
            name="subtitle"
            onChange={this.updateState}
            value={this.state.subtitle}
            data-testid="subtitle-input"
          />
        </label>
        <br />
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem{' '}
          <input
            id="image-input"
            type="text"
            name="imagePath"
            onChange={this.updateState}
            value={this.state.imagePath}
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse{' '}
          <textarea
            name="storyline"
            onChange={this.updateState}
            id="storyline-input"
            cols="30"
            rows="10"
            value={this.state.storyline}
            data-testid="storyline-input"
          />
        </label>
        <br />
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação{' '}
          <input
            id="rating-input"
            type="number"
            name="rating"
            onChange={this.updateState}
            value={this.state.rating}
            data-testid="rating-input"
          />
        </label>
        <br />
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            style={{ marginLeft: 10 }}
            name="genre"
            onChange={this.updateState}
            id="genre-input"
            data-testid="genre-input"
            value={this.state.genre}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.submit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { addNewMovie: PropTypes.func.isRequired };

export default AddMovie;
