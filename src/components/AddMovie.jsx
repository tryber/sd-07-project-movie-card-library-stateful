// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'subtitle': '',
      'title': '',
      'imagePath': '',
      'storyline': '',
      'rating': 0,
      'genre': 'action',
    };
  }
  changeSubtitle({target}) {
    this.setState({
      'subtitle': target.value
    })
  }
  changeTitle({target}) {
    this.setState({
      'title': target.value;
    })
  }
  changeImage({target}) {
    this.setState({
      'imagePath': target.value;
    })
  }
  changeStoryline({target}) {
    this.setState({
      'storyline': target.value;
    })
  }
  changeRating({target}) {
    this.setState({
      'rating': target.value;
    })
  }
  changeGenre({target}) {
    this.setState({
      'genre': target.value;
    })
  }
  changeGenre
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          <label data-testid="title-input-label">
            Título
            <input
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.props.title}
            />
          </label>
          <label data-testid="subtitle-input-label" > Subtítulo
            <input 
              value={this.state.subtitle} 
              data-testid="subtitle-input" 
              onChange={this.changeSubtitle} 
            />
          </label>
          <label data-testid="image-input-label"> Imagem
            <input 
              value={this.state.imagePath} 
              data-testid="image-input" 
              onChange={this.changeImage}/>
          </label>
          <label data-testid="storyline-input-label">Sinopse
            <textarea 
              value={this.state.storyline} 
              data-testid="storyline-input"
              onChange={this.changeStoryline}
            />
          </label>
          <label data-testid="rating-input-label">Avaliação
            <input 
              type='number' 
              value={this.state.rating} 
              data-testid="rating-input" 
              onChange={this.changeRating}
            />
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select value={this.state.genre} data-testid="genre-input" onChange={this.changeGenre}>
              <option name="action" value="action">
                Ação
              </option>
              <option name="comedy" value="comedy">
                Comédia
              </option>
              <option name="thriller" value="thriller">
                Suspense
              </option>
            </select>
          </label>
        </form>
      </div>
      // - subtítulo
      // - título
      // - caminho da imagem
      // - sinopse
      // - avaliação
      // - gênero
    );
  }
}

export default AddMovie;
