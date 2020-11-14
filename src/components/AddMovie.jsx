import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeSelected = this.handleChangeSelected.bind(this);
  }

  handleChangeTitle(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.title = event.target.value;
    this.setState(state);
  }

  handleChangeSubtitle(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.subtitle = event.target.value;
    this.setState(state);
  }

  handleChangeImagePath(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.imagePath = event.target.value;
    this.setState(state);
  }

  handleChangeStoryline(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.storyline = event.target.value;
    this.setState(state);
  }

  handleChangeRating(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.rating = event.target.value;
    this.setState(state);
  }

  handleChangeSelected(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.genre = event.target.value;
    this.setState(state);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title-input" data-testid="title-input-label">
                Título
            <input
              value={title}
              data-testid="title-input"
              id="title-input"
              onChange={this.handleChangeTitle}
              type="text"
            />
          </label>
          <label
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label"
          >
          Subtítulo
            <input
              id="subtitle-input"
              value={subtitle}
              data-testid="subtitle-input"
              type="text"
              onChange={this.handleChangeSubtitle}
            />
          </label>
          <label
            htmlFor="image-input"
            data-testid="image-input-label"
          >
          Imagem
            <input
              id="image-input"
              value={imagePath}
              data-testid="image-input"
              type="text"
              onChange={this.handleChangeImagePath}
            />
          </label>
          <label
            htmlFor="storyline-input"
            data-testid="storyline-input-label"
          >
          Sinopse
            <textarea
              id="storyline-input"
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChangeStoryline}
            />
          </label>
          <label
            htmlFor="rating-input"
            data-testid="rating-input-label"
          >
          Avaliação
            <input
              id="rating-input"
              value={rating}
              data-testid="rating-input"
              type="number"
              onChange={this.handleChangeRating}
            />
          </label>
          <label
            htmlFor="genre-input"
            data-testid="genre-input-label"
          >
            Gênero
            <select
              id="genre-input"
              data-testid="genre-input"
              value={genre}
              onChange={this.handleChangeSelected}
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="Suspense" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
