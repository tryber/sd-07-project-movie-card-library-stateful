// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeStoryline = this.changeStoryline.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.clickButton = this.clickButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.baseState = this.state;
  }
  changeSubtitle({ target }) {
    this.setState({
      subtitle: target.value,
    });
  }
  changeTitle({ target }) {
    this.setState({
      title: target.value,
    });
  }
  changeImage({ target }) {
    this.setState({
      imagePath: target.value,
    });
  }
  changeStoryline({ target }) {
    this.setState({
      storyline: target.value,
    });
  }
  changeRating({ target }) {
    this.setState({
      rating: target.value,
    });
  }
  changeGenre({ target }) {
    this.setState({
      genre: target.value,
    });
  }
  clickButton() {
    this.props.onClick(this.state);
    this.setState(this.baseState); //é pra ter essa linha mesmo?
  }
  changeGenre();
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <label data-testid="title-input-label">
            {' '}
            Título
            <input
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.changeTitle}
            />
          </label>
          <label data-testid="subtitle-input-label">
            {' '}
            Subtítulo
            <input
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.changeSubtitle}
            />
          </label>
          <label data-testid="image-input-label">
            {' '}
            Imagem
            <input
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.changeImage}
            />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.changeStoryline}
            />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              value={this.state.rating}
              data-testid="rating-input"
              onChange={this.changeRating}
            />
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select value={this.state.genre} data-testid="genre-input" onChange={this.changeGenre}>
              <option name="action" value="action" data-testid="genre-option">
                Ação
              </option>
              <option name="comedy" value="comedy" data-testid="genre-option">
                Comédia
              </option>
              <option name="thriller" value="thriller" data-testid="genre-option">
                Suspense
              </option>
            </select>
          </label>
          <button data-testid="send-button" onClick={this.clickButton}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
