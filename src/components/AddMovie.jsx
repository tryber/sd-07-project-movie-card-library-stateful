// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handlerTextAreaChange = this.handlerTextAreaChange.bind(this)

    this.state = {
        subtitle:'',
        title:'',
        imagePath:'',
        storyPath:'',
        storyLine:'',
        rating: 0,
        genre: 'action',
    };
  }
  handlerTextAreaChange({ target }) {
    const { name } = target;
    const value = target.type === 'option' ? target.checked : target.value;

    this.setState({
        [name]: value,
    });
  }
  render() {
    return (
        <form>
            <label htmlFor="titulo" data-testid="title-input-label">Titulo
                <input 
                    id="titulo"
                    type="text"
                    data-testid="title-input"
                    value={this.state.title}  
                />
            </label>

            <label htmlFor="subtitulo" data-testid="subtitle-input-label">Subtítulo
                <input 
                    id="subtitulo"
                    type="text"
                    data-testid="subtitle-input"
                    value={this.state.subtitle}
                />
            </label>

            <label htmlFor="photo" data-testid="image-input-label">Imagem
                <input 
                    id="photo"
                    type="text"
                    data-testid="image-input"
                    value={this.state.imagePath}
                />
            </label>

            <label htmlFor="sinopse" data-testid="storyline-input-label">Sinopse
                <input
                    id="sinopse"
                    data-testid="storyline-input" 
                    type="textarea" 
                    value={this.state.storyline}
                />
            </label>

            <label htmlFor="avaliacao" data-testid="rating-input-label">Avaliação
                <input
                    id="avaliaçao"
                    data-testid="rating-input" 
                    type="number" 
                    value={this.state.rating} 
                />
            </label>

            <label htmlFor="genero" data-testid="genre-input-label">Gênero</label>
            <select value={this.state.genre}>
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
            <button data-testid="send-button">Adicionar filme</button>
        </form>
    )
   }   
}

export default AddMovie;