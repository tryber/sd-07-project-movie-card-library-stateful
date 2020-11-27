import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: '',
    };
    this.changeHandler = this.handChanger.bind(this);
    this.addNewMovie = this.HandClickButton.bind(this);   
  }

  handChanger(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    event.preventDefalut()
  }

  HandClickButton() {
    this.props.onClick(this.state);
    this.setState({
        subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
      const { subtitle , title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="add-movie">
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
          Título
            <input
              type="text"
              data-testid="title-input"
              className="inputs"
              name="title"
              value={title}
              onChange={this.handChanger}
            />
          </label>
          <br />
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <br />
            <input
              type="text"
              data-testid="subtitle-input"
              className="inputs"
              name="subtitle"
              value={subtitle}
              onChange={this.handChanger}
            />
          </label>
          <br />
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <br />
            <input
              type="text"
              data-testid="image-input"
              className="inputs"
              name="imagePath"
              value={imagePath}
              onChange={this.handChanger}
            />
          </label>
          <br />
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <br />
            <textarea
              data-testid="storyline-input"
              className="textarea"
              name="storyline"
              value={storyline}
              onChange={this.handChanger}
              placeholder="Escreva um breve resumo"
              maxLength="120"
            />
          </label>
          <br />
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <br />
            <input
              type="number"
              data-testid="rating-input"
              className="inputs"
              name="rating"
              max="5"
              step="0.1"
              value={rating}
              onChange={this.handChanger}
            />
          </label>
          <br />
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <br />
            <select
              data-testid="genre-input"
              name="genre"
              className="inputs"
              value={genre}
              onChange={this.handChanger}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
        <button
          data-testid="send-button"
          className="button"
          onClick={this.HandClickButton}
        >Adicionar filme</button>
      </div>

    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
