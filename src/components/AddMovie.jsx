import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
    this.handleEventAddMovie = this.handleEventAddMovie.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleEventAddMovie({ target }) {
    const MovieSpecKey = target.name;
    const type = target.type;
    const MovieSpecValue =
      type === "checkbox"
        ? target.checked 
        : type === "number"
        ? Number(target.value)
        : target.value;

    this.setState({ [MovieSpecKey]: MovieSpecValue });
  }

  submitButton(functionCall) {
    const originState = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };

    functionCall(this.state);
    this.setState(originState);
  }

  render() {
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form" onSubmit={() => {}}>
        <fieldset>
          <label data-testid="title-input-label">Título</label>
          <input
            name="title"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleEventAddMovie}
            type="text"
          />
        </fieldset>
        <fieldset>
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input
            name="subtitle"
            value={this.state.subtitle}
            data-testid="subtitle-input"
            onChange={this.handleEventAddMovie}
            type="text"
          />
        </fieldset>
        <fieldset>
          <label data-testid="image-input-label">Imagem</label>
          <input
            name="imagePath"
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.handleEventAddMovie}
            type="text"
          />
        </fieldset>
        <fieldset>
          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea
            onChange={this.handleEventAddMovie}
            name="storyline"
            value={this.state.storyline}
            cols="30"
            rows="10"
            data-testid="storyline-input"
          />
        </fieldset>
        <fieldset>
          <label data-testid="rating-input-label">Avaliação</label>
          <input
            name="rating"
            value={this.state.rating}
            data-testid="rating-input"
            onChange={this.handleEventAddMovie}
            type="number"
          />
        </fieldset>
        <fieldset>
          <label data-testid="genre-input-label">Gênero</label>
          <select
            name= "genre"
            value={this.state.genre}
            onChange={this.handleEventAddMovie}
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option data-testid="genre-option" value="comedy">
              Comédia
            </option>
            <option data-testid="genre-option" value="thriller">
              Suspense
            </option>
          </select>
        </fieldset>
        <button
          type="submit"
          data-testid="send-button"
          onClick={(event) => {
            this.submitButton(onClick);
            event.preventDefault() 
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
