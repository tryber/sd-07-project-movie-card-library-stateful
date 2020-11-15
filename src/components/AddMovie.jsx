// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
    this.onTitleTextChange = this.onTitleTextChange.bind(this);
    this.onSubtitleTextChange = this.onSubtitleTextChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onStoryLineChange = this.onStoryLineChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onTitleTextChange(event) {
    this.setState({ title: event.target.value });
  }

  onSubtitleTextChange(event) {
    // console.log(event.target.value);
    this.setState({ subtitle: event.target.value });
  }

  onImageChange(event) {
    // console.log(event.target.value);
    this.setState({ imagePath: event.target.value });
  }

  onStoryLineChange(event) {
    // console.log(event.target.value);
    this.setState({ storyline: event.target.value });
  }

  onRatingChange(event) {
    // console.log(event.target.value);
    this.setState({ rating: event.target.value });
  }

  onGenreChange(event) {
    // console.log(event.target.value);
    this.setState({ genre: event.target.value });
  }

  buttonClick() {
    // console.log('xablau');
    // Aqui precisa juntar todas informações em um Objeto, tem aquele (...) que faz isso
    const newMovie = this.state;
    this.props.onClick(newMovie);
    // this.props.onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const chegada = this.props.onClick;
    // console.log(`Chegada da data no AddMovie = ${chegada}`);
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="inputTitle" data-testid="title-input-label">Título</label>
        <input
          id="inputTitle"
          data-testid="title-input"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleTextChange}
        />
        <br />
        <label htmlFor="inputSubTitle" data-testid="subtitle-input-label">Subtítulo</label>
        <input
          id="inputSubTitle"
          data-testid="subtitle-input"
          type="text"
          placeholder="Subtitle"
          value={this.state.subtitle}
          onChange={this.onSubtitleTextChange}
        />
        <br />
        <label htmlFor="inputSubTitle" data-testid="image-input-label">Imagem</label>
        <input
          id="inputSubTitle"
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.onImageChange}
        />
        <br />
        <label htmlFor="inputStoryline" data-testid="storyline-input-label">Sinopse</label>
        <textarea
          id="inputStoryline"
          data-testid="storyline-input"
          type="textarea"
          value={this.state.storyline}
          onChange={this.onStoryLineChange}
        />
        <br />
        <label htmlFor="inputRating" data-testid="rating-input-label">Avaliação</label>
        <input
          id="inputRating"
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.onRatingChange}
        />
        <br />
        <label htmlFor="inputSelect" data-testid="genre-input-label">Gênero</label>
        <select
          id="inputSelect"
          data-testid="genre-input"
          // pq value={this.props.genre} funcionava no botão mas não no avaliador?
          value={this.state.genre}
          onChange={this.onGenreChange}
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
        <button type="button" data-testid="send-button" onClick={this.buttonClick}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
