import React from 'react';
import PropType from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);

      this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre:'action',
      }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.props);

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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    
    return (
      <form>
          <label htmlFor="title-input" data-testid="title-input-label">
          Título
            <input type="text" id="title-input" 
                data-testid="title-input" 
                value={title}
                name="title" 
                onChange={this.handleChange}/>
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
            <input type="text" id="subtitle-input" 
                name="subtitle"
                value={subtitle} 
                data-testid="subtitle-input" 
                onChange={this.handleChange}/>
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
            <input type="text" 
              id="image-input" 
              value={imagePath}
              data-testid="image-input"
              name="imagePath"
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
            <input type="text" 
              id="storyline-input" 
              value={storyline}
              name="storyline"
              data-testid="storyline-input" 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
            <input type="number" 
              name="rating" 
              id="rating-input" 
              value={rating} 
              data-testid="rating-input" 
              onChange={this.handleChange}/>
          </label>
          <label htmlFor="genre-selection" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="genre-selection" value={genre} onChange={this.handleChange}>
            <option value="action" data-testid="genre-option" >Ação</option>
            <option value="comedy" data-testid="genre-option" >Comédia</option>
            <option value="thriller" data-testid="genre-option" >Suspense</option>
          </select>
          </label>
          <button data-testid="send-button" onClick={this.addMovie}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.PropTypes = { onClicK: PropType.func.isRequired };

export default AddMovie;
