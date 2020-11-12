// implement AddMovie component here
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
  }

  changeInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>
          <input
            data-testid="title-input"
            id="title-input"
            name="title"
            value={this.state.title}
            onChange={this.changeInput}>
          </input>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            name="subtitle"
            value={this.state.subtitle}
            onChange={this.changeInput}>
          </input>

          <label data-testid="image-input-label" htmlFor="image-input">Imagem</label>
          <input
            data-testid="image-input"
            id="image-input"
            name="imagePath"
            value={this.state.imagePath}
            onChange={this.changeInput}>
          </input>


        </form>
      </div>
    );
  }
}

export default AddMovie;
