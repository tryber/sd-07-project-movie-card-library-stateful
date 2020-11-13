import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeHandler({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({ [name]: value });
  }


  render() {
    return (
      <form>
        <label data-testid="title-input-label" htmlFor="title-input" >
          Título
          <input
            className="inputs"
            id="title-input"
            type="text"
            name="title"
            data-testid="title-input"
            onChange={this.changeHandler}
            value={this.state.title}
          />
        </label>

        <div />

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            className="inputs"
            id="subtitle-input"
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={this.changeHandler}
            value={this.state.subtitle}
          />
        </label>

        <div />

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            className="inputs"
            id="image-input"
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={this.changeHandler}
            value={this.state.imagePath}
          />
        </label>

        <div />

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <input
            className="inputs"
            id="storyline-input"
            type="textarea"
            name="storyline"
            data-testid="storyline-input"
            onChange={this.changeHandler}
            value={this.state.storyline}
          />
        </label>

        <div />

        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            className="inputs"
            id="rating-input"
            type="number" name="rating"
            data-testid="rating-input"
            onChange={this.changeHandler}
            value={this.state.rating}
          />
        </label>

        <div />

        <label data-testid="genre-input-label" htmlFor="select-genre-input">
          Gênero
          <select
            id="select-genre-input" data-testid="genre-input"
            className="inputs" name="genre"
            value={this.state.genre} onChange={this.changeHandler}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>

          </select>
        </label>

        <div />

        <button
          type="button"
          data-testid="send-button"
          onClick={() => {
            this.props.addMovie(this.state)
            this.setState(() => ({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            }));
          }}
        >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
