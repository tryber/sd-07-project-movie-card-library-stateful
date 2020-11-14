// implement AddMovie component here
import React from "react";


class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    // this.onClick = this.onClick.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  onTitleTextChange = (event) => {
    this.setState({ title: event.target.value })
  };

  onSubtitleTextChange = (event) => {
    // console.log(event.target.value);
    this.setState({ subtitle: event.target.value });
  };

  onImageChange = (event) => {
    // console.log(event.target.value);
    this.setState({ imagePath: event.target.value });
  };

  onStoryLineChange = (event) => {
    // console.log(event.target.value);
    this.setState({ storyline: event.target.value });
  };

  onRatingChange = (event) => {
    // console.log(event.target.value);
    this.setState({ rating: event.target.value });
  };

  onGenreChange = (event) => {
    // console.log(event.target.value);
    this.setState({ genre: event.target.value });
  };

  buttonClick = () => {
    console.log('xablau');
    this.props.onClick();
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    });
  };

  render() {
    // const chegada = this.props.onClick;
    // console.log(`Chegada da data no AddMovie = ${chegada}`);
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label>
        <input
          data-testid="title-input"
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleTextChange}
        ></input>
        <br></br>
        <label data-testid="subtitle-input-label">Subtítulo</label>
        <input
          data-testid="subtitle-input"
          type="text"
          placeholder="Subtitle"
          value={this.state.subtitle}
          onChange={this.onSubtitleTextChange}
        ></input>
        <br></br>
        <label data-testid="image-input-label">Imagem</label>
        <input
          data-testid="image-input"
          type="text"
          value={this.state.imagePath}
          onChange={this.onImageChange}
        ></input>
        <br></br>
        <label data-testid="storyline-input-label">Sinopse</label>
        <textarea
          data-testid="storyline-input"
          type="textarea"
          value={this.state.storyline}
          onChange={this.onStoryLineChange}
        ></textarea>
        <br></br>
        <label data-testid="rating-input-label">Avaliação</label>
        <input
          data-testid="rating-input"
          type="number"
          value={this.state.rating}
          onChange={this.onRatingChange}
        ></input>
        <br></br>
        <label data-testid="genre-input-label">Gênero</label>
        <select
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

export default AddMovie;
