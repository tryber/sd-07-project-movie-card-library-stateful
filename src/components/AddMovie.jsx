// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    const add = this.props;
    console.log(add)
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">Título</label>
        <input
          id="title"
          type="text"
          data-testid="title-input"
          value={add.title}
          onChange={add.onChangeAddTitle}
        />
        <label htmlFor="subtitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          id="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={add.subtitle}
          onChange={add.onChangeAddSubtitle}
        />
        <label htmlFor="image" data-testid="image-input-label">Imagem</label>
        <input
          id="image"
          type="text"
          data-testid="image-input"
          value={add.imagePath}
          onChange={add.onChangeAddImage}
        />
        <label htmlFor="storyLine" data-testid="storyline-input-label">Sinopse</label>
        <input
          id="storyLine"
          type="textarea"
          data-testid="storyline-input"
          value={add.storyline}
          onChange={add.onChangeAddStoryline}
        />
        <label htmlFor="rating-input" data-testid="rating-input-label">Avaliação</label>
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={add.rating}
          onChange={add.onChangeAddRating}
        />
        <label htmlFor="genre" data-testid="genre-input-label">Gênero</label>
        <select
          id="genre"
          data-testid="genre-input"
          value={add.genre}
          onChange={add.onChangeAddGenre}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
        <button
          type="submit"
          id="send-button"
          data-testid="send-button"
          onClick={add.onChangeAddButton}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
