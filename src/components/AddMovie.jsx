/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewMovie() {
    // const { onClick } = this.props;
    this.props.onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    // onClick();
  }

  render() {
    return (
      <div>

        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              name="title"
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.changeHandler}
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtible">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.changeHandler}
            />
          </label>

          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.changeHandler}
            />
          </label>

          <label data-testid="storyline-input-label" htmlFor="storyline">
            Sinopse
            <input
              name="storyline"
              type="textarea"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.changeHandler}
            />
          </label>

          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              name="rating"
              type="number"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.changeHandler}
            />
          </label>

          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              name="genre"
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.changeHandler}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>

        </form>

        <button
          data-testid="send-button"
          onClick={this.addNewMovie}
        >
          Adicionar filme
        </button>

      </div>
    );
  }
}

export default AddMovie;
AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
