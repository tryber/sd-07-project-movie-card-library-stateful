// implement AddMovie component here

import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  changeStateValue = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    const { onClick } = this.props;
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input name="title" data-testid="title-input" onChange={this.changeStateValue} value={this.state.title} />

        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input name="subtitle" data-testid="subtitle-input" value={this.state.subtitle} onChange={this.changeStateValue} />

        <label data-testid="image-input-label">Imagem</label>
        <input name="imagePath" data-testid="image-input" onChange={this.changeStateValue} value={this.state.imagePath} />

        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea name="storyline" data-testid="storyline-input" onChange={this.changeStateValue} value={this.state.storyline} />
      </form>
    )
  }
}

export default AddMovie;
