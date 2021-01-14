import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name);
    this.setState({ [name]: [value] });
    }

  handleClick() {
    console.log(this.state);
  }
  
  render() {
    return (
      <form>
        <label data-testid="title-input-label" htmlFor="input-text">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            // O input vai ser lido pelo state do values
            value={this.state.title}
            // O onChange não deve utilizar () na função
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="input-text">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="input-text">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="input-text">
          Sinopse
          <input
            type="text"
            name="storyline"
            data-testid="storyline-input"
            value={this.state.storyline}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="input-number">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={this.state.rating}
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="select">
          <select
            name="genre"
            value={this.state.genre}
            data-testid="genre-input"
            onChange={this.handleChange}
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
        </label>
        <button data-testid="send-button" onClick={this.handleClick} />
      </form>
    );
  }
}

export default AddMovie;
