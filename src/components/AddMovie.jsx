import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange(event) {
    const { name } = event.target;
    this.setState({ title: name });
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        <label data-testid="title-input-label">Título</label>
        <input data-testid="title-input" type="text" value={this.title} onChange={this.onChange} />
        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input data-testid="subtitle-input" type="text" value={this.subtitle} />

        <label data-testid="image-input-label">Imagem</label>
        <input data-testid="image-input" type="text" value={this.imagePath} />

        <label data-testid="storyline-input-label">Sinopse</label>
        <input data-testid="storyline-input" type="textarea" value={this.storyline} />

      </form>
    );
  }
}

export default AddMovie;
