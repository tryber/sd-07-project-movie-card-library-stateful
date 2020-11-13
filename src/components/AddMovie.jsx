import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.button = this.button.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
  }
  change(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  button() {
    const p = this.props;
    p.onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="t" data-testid="title-input-label">Título</label>
          <input
            data-testid="title-input"
            type="text"
            name="title"
            id="t"
            onChange={this.change}
            value={this.state.title}
          />
        </div>
        <div>
          <label htmlFor="s" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            id="s"
            onChange={this.change}
            value={this.state.subtitle}
          />
        </div>
        <div>
          <label htmlFor="l" data-testid="storyline-input-label">Sinopse</label>
          <input
            data-testid="storyline-input"
            type="text"
            name="storyline"
            id="l"
            onChange={this.change}
            value={this.state.storyline}
          />
        </div>
        <div>
          <label htmlFor="r" data-testid="rating-input-label">Avaliação</label>
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="r"
            onChange={this.change}
            value={this.state.rating}
          />
        </div>
        <div>
          <label htmlFor="i" data-testid="image-input-label">Imagem</label>
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            id="i"
            onChange={this.change}
            value={this.state.imagePath}
          />
        </div>
        <div>
          <label htmlFor="g" data-testid="genre-input-label">Gênero</label>
          <select
            data-testid="genre-input"
            name="genre"
            id="g"
            onChange={this.change}
            value={this.state.genre}
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </div>
        <button data-testid="send-button" onClick={this.button}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
