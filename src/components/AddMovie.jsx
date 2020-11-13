import React from 'react';

export default class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    this.stateChange = this.stateChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  stateChange(key, valeu) {
    this.setState({ [key]: valeu });
  }

  resetState() {
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
    const prop = this.props;
    return (
      <form data-testid="add-movie-form" >
        <label htmlFor="title" data-testid="title-input-label" >
          Título
        </label>
        <input
          id="title"
          value={this.state.title}
          data-testid="title-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label" >
          Subtítulo
        </label>
        <input
          id="subtitle"
          value={this.state.subtitle}
          data-testid="subtitle-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        />
        <label htmlFor="imagePath" data-testid="image-input-label" >
          Imagem
        </label>
        <input
          id="imagePath"
          value={this.state.imagePath}
          data-testid="image-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label" >
          Sinopse
        </label>
        <textarea
          id="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        />
        <label htmlFor="rating" data-testid="rating-input-label" >
          Avaliação
        </label>
        <input
          type="number"
          id="rating"
          value={this.state.rating}
          data-testid="rating-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        />
        <label htmlFor="genre" data-testid="genre-input-label" >
          Gênero
        </label>
        <select
          id="genre"
          value={this.state.genre}
          data-testid="genre-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
        >
          <option value="action" data-testid="genre-option" >Ação</option>
          <option value="comedy" data-testid="genre-option" >Comédia</option>
          <option value="thriller" data-testid="genre-option" >Suspense</option>
        </select>
        <button
          data-testid="send-button"
          onClick={() => {
            prop.onClick(this.state);
            this.resetState();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}
