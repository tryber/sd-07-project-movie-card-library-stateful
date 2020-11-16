// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.subtitle = { value: '' };
    this.title = { value: '' };
    this.imagePath = { value: '' };
    this.storyline = { value: '' };
    this.rating = { value: 0 };
    this.genre = { value: 'action' };

    this.handleCard = this.handleCard.bind(this);
  }

  handleCard() {
    console.log('clicou');
  }

  handleTitle(event) {
    console.log(event.target.value);
  }

  handleSubtitle(event) {
    console.log(event.target.value);
  }

  handleStoryLine(event) {
    console.log(event.target.value);
  }

  handleRating(event) {
    console.log(event.target.value);
  }

  handleGenre(event) {
    console.log(event.target.value);
  }

  handleImage(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <form className="container-form">
        <label htmlFor="input-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            className="input-form"
            id="input-title"
            value={this.props.title}
            data-testid="title-input"
            onChange={this.handleTitle}
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
        Subtítulo
          <input
            type="text"
            placeholder="Subtitulo"
            className="input-form"
            id="input-subtitle"
            data-testid="subtitle-input"
            value={this.props.subtitle}
            onChange={this.handleSubtitle}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-image">
          <input
            type="text"
            className="input-form"
            id="input-image"
            value={this.props.imagePath}
            data-testid="image-input"
            onChange={this.handleImage}
          />
        </label>
        <label htmlFor="text-area" data-testid="storyline-input-label">
        Sinopse
          <textarea
            cols="30"
            rows="3"
            className="text-area"
            id="text-area"
            value={this.props.storyline}
            data-testid="storyline-input"
            onChange={this.handleStoryLine}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          <input
            type="number"
            placeholder="Avaliação"
            className="input-form"
            onChange={this.handleRating}
          />
        </label>

        <label htmlFor="form-addMovie" data-testid="genre-input-label">
          Gênero:
          <select
            id="form-addMovie"
            value={this.props.genre}
            data-testid="genre-input"
            onChange={this.handleGenre}
          >
            <option value="" />
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button className="btn-sucess" type="submit" onClick={this.handleCard} data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTyps = { handleCard: PropTypes.func.isRequired };
export default AddMovie;
