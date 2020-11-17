// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  handleSearchValue({ target }) {
    this.setState({ [target.id]: target.value });
  }

  render() {
    return (
      <form className="cadastrar-filme" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título

          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo

          <input
            type="text"
            name="subtitle"
            id="subtitle"
            data-testid="subtitle-input"
            value={this.state.subtitle}
            onChange={this.handleSearchValue}
          />
        </label>

        <label htmlFor="image" data-testid="image-input-label">
          Imagem

          <input
            type="text"
            name="image"
            id="imagePath"
            data-testid="image-input"
            value={this.state.imagePath}
            onChange={this.handleSearchValue}
          />
        </label>
      </form>
    );
  }
}


export default AddMovie;
