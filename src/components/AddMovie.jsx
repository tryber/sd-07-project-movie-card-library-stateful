import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
    this.updateState = this.updateState.bind(this);
    this.submit = this.submit.bind(this);
  }
  updateState = (event) => {
      const {target} = event
      this.setState({
        [target.name]: target.value
      })
  }
  submit = (event) => {
    event.preventDefault();
    const newMovie = this.state;
    this.props.addNewMovie(newMovie);
  }
  render() {
    return (
      <form action="">
        <label htmlFor="" data-testid="title-input-label">
        Título <input type="text" name="title" value={this.state.title} data-testid="title-input" onChange={this.updateState}></input>
        </label>
        <br />
        <label htmlFor="" data-testid="subtitle-input-label">
        Subtítulo <input type="text" name="subtitle" onChange={this.updateState} value={this.state.subtitle} data-testid="subtitle-input"></input>
        </label>
        <br />
        <label htmlFor="" data-testid="image-input-label">
        Imagem <input type="text" name="imagePath" onChange={this.updateState} value={this.state.imagePath} data-testid="image-input"></input>
        </label>
        <br />
        <label htmlFor="" data-testid="storyline-input-label">
        Sinopse <textarea name="storyline" onChange={this.updateState} id="" cols="30" rows="10" value={this.state.storyline} data-testid="storyline-input"></textarea>
        </label>
        <br />
        <label htmlFor="" data-testid="rating-input-label">
        Avaliação <input type="number" name="rating" onChange={this.updateState} value={this.state.rating} data-testid="rating-input"></input>
        </label>
        <br />
        <label htmlFor="" data-testid="genre-input-label">
        Gênero
          <select
            style={{ marginLeft: 10 }}
            name="genre" onChange={this.updateState}
            id=""
            data-testid="genre-input"
            value={this.state.genre}
          >
            <option value="action">
              Ação
            </option>
            <option value="comedy">
              Comédia
            </option>
            <option value="thriller">
              Suspense
            </option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.submit}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;