import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.onClicAddMovie = this.onClicAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 0,
    };
  }

  onClicAddMovie() {

  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => {
      if (name === 'rating') return { [name]: Number(value) };
      return { [name]: value };
    });
  }

  render() {
    return (
      <div className="myForm">
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="addMovieInput">
            Título
            <input
              type="text"
              name="addMovieInput"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="addSubTitulo">
           Subtítulo
            <input
              data-testid="subtitle-input"
              type="text" value={this.state.subtitle}
              onChange={this.handleChange}
              name="addSubTitulo"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="addMovieImagem">
           Imagem 
            <input
              data-testid="image-input"
              name="addMovieImagem"
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="addMovieTextarea">
          Sinopse
            <textarea
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.handleChange}
              name="addMovieTextarea"
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="addMovieRating">
          Avaliação
            <input
              data-testid="rating-input"
              name="addMovieRating"
              value={this.state.rating}
              onChange={this.HandleChange}
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="addMovieSelect">
          Gênero
            <select
              data-testid="genre-input"
              name="addMovieSelect"
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" selected value="thriller">Suspense</option>
            </select>
          </label>
          <label htmlFor="addMovieButton">
            <button
              data-testid="send-button"
              onClick={() => this.onClicAddMovie}
              name="addMovieButton"
            >
                Adicionar filme
              </button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
