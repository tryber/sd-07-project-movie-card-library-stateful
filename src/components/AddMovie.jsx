import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.myfunction = this.myfunction.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: 0,
    };
  }

  myfunction() {

  }

  render() {
    return (
      <div className="myForm">
        <form>
          <label data-testid="title-input-label" htmlFor="addMovieInput">
            Título <br />
            <input
              type="text"
              name="addMovieInput"
              data-testid="title-input"
              value={this.state.title}
              onChange={this.state.title}
            />
          </label>
          <br />
          <label data-testid="subtitle-input-label" htmlFor="addSubTitulo">
           Subtítulo <br />
            <input
              data-testid="subtitle-input"
              type="text" value={this.state.subtitle}
              onChange={this.state.subtitle}
              name="addSubTitulo"
            />
          </label>
          <br />
          <label data-testid="image-input-label" htmlFor="addMovieImagem">
           Imagem <br />
            <input
              data-testid="image-input"
              name="addMovieImagem"
              value={this.state.imagePath}
              onChange={this.state.imagePath}
            />
          </label>
          <br />
          <label data-testid="storyline-input-label" htmlFor="addMovieTextarea">
          Sinopse <br />
            <textarea
              data-testid="storyline-input"
              value={this.state.storyline}
              onChange={this.state.storyline}
              name="addMovieTextarea"
            />
          </label>
          <br />
          <label data-testid="rating-input-label" htmlFor="addMovieRating">
          Avaliação <br />
            <input
              data-testid="rating-input"
              name="addMovieRating"
              value={this.state.rating}
              onChange={this.state.rating}
            />
          </label>
          <br />
          <label data-testid="genre-input-label" htmlFor="addMovieSelect">
          Gênero <br />
            <select
              data-testid="genre-input"
              name="addMovieSelect"
              value={this.state.genre}
              onChange={this.state.genre}
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" selected value="thriller">Suspense</option>
            </select>
          </label>
          <br />
          <label htmlFor="addMovieButton">
            <button
              data-testid="send-button"
              onClick={() => this.myfunction}
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
