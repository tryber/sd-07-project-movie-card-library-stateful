// implement AddMovie component here
import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleStates = this.handleStates.bind(this);
    this.updateStates = this.updateStates.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };
  }

  handleStates({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetState() {
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    });
  }

  updateStates(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        <div>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleStates}
              data-testid="title-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={this.state.subtitle}
              onChange={this.handleStates}
              data-testid="subtitle-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="imagePath"
              value={this.state.imagePath}
              onChange={this.handleStates}
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              id="storyline"
              cols="30"
              rows="10"
              value={this.state.storyline}
              onChange={this.handleStates}
              data-testid="storyline-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating"
              value={this.state.rating}
              onChange={this.handleStates}
              data-testid="rating-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              id="genre"
              value={this.state.genre}
              onChange={this.handleStates}
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">
                Ação
              </option>
              <option value="comedy" data-testid="genre-option">
                Comédia
              </option>
              <option value="thriller" data-testid="genre-option">
                Suspense
              </option>
            </select>
          </label>
        </div>
        <button data-testid="send-button" onClick={this.updateStates}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
