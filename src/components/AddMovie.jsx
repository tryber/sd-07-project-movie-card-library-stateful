import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyLine: "",
      rating: 0,
      genre: "action",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === "checkbox" ? target.cheked : target.value;
    this.setState({ [target.id]: value })
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form>
        <label data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={this.handleChange}
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        
      </form>
    );
  }
}

export default AddMovie;
