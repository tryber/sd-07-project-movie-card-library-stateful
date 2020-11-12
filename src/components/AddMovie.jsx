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
      genre: 'action'
    };
  }

  changeState = ({target}) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { onClick } = this.props;
    const { storyline, title, subtitle, imagePath, rating, genre} = this.state
    return (
      <form>
        <label
          data-testid="title-input-label"
          htmlFor="title">Título</label>

        <input
          name="title"
          data-testid="title-input"
          onChange={this.changeState}
          value={title}
          type="text"/>

        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle">Subtítulo</label>

        <input
          name="subtitle"
          data-testid="subtitle-input"
          onChange={this.changeState}
          value={subtitle}
          type="text"/>

        <label
          data-testid="image-input-label"
          htmlFor="imagePath">Imagem</label>

        <input
          data-testid="image-input"
          onChange={this.changeState}
          value={imagePath}
          type="text"
          name="imagePath"/>

        <label
          data-testid="storyline-input-label"
          htmlFor="storyline">Sinopse</label>

        <input
          data-testid="storyline-input"
          onChange={this.changeState}
          value={storyline}
          name="storyline"
          type="text"/>

        <label
          data-testid="rating-input-label"
          htmlFor="rating">Avaliação</label>

        <input
          data-testid="rating-input"
          name="rating"
          onChange={this.changeState}
          value={rating}
          type="text"/>

        <label
          data-testid="genre-input-label"
          htmlFor="genre">Gênero</label>

        <select
          data-testid="genre-input"
          onChange={this.changeState}
          value={genre}
          name="genre">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
};

export default AddMovie;
