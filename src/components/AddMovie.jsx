import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.clearForm = this.clearForm.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.clearForm = this.clearForm.bind(this);

        this.state = {
          subtitle: '',
          title: '',
          imagePath: '',
          storyline: '',
          rating: 0,
          genre: 'action'
        };
    }

    clearForm() {
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action'
    });
  }

     sendForm(event) {
       event.preventDefault();
       const { onClick } = this.props;
       onClick(this.state);
       this.clearForm();
     }

  render() {
    return (
        <div>
            <form data-testid="add-movie-form">
              <div>
                <label htmlFor='title-input'data-testid="title-input-label">Título</label>
                <input type="text"
                name="title-input"  
                value={this.state.title}
                data-testid="title-input"
                onChange={(event) => this.setState({title: event.target.value})}/>

            <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo</label>
            <input 
            type="text" 
            name='subtitle-input'  
            value={this.state.subtitle}
            data-testid="subtitle-input" 
            onChange={(event) => this.setState({subtitle: event.target.value})}/>

            <label  data-testid="image-input-label" htmlFor="image-input">Imagem</label>
            <input 
            type="text" 
            name='image-input'
            value={this.state.imagePath} 
            data-testid="image-input" 
            onChange={(event) => this.setState({ imagePath: event.target.value})}/>
            
            <label htmlFor="storyline-input" data-testid="storyline-input-label">Sinopse</label>
            <textarea 
            data-testid="storyline-input"
            name="storyline-input"value={this.state.storyline} 
            onChange={(event) => this.setState({storyline: event.target.value})}/>
            
            <label data-testid="rating-input-label" htmlFor="rating-input">Avaliação</label>
            <input 
            type="number" 
            name="rating-input" 
            value={this.state.rating} 
            data-testid="rating-input" 
            onChange={(event) => this.setState({rating: event.target.value})}/>
             
            <label htmlFor="genre"data-testid="genre-input-label">Gênero</label>

            <select 
            value={this.state.genre}
            data-testid="genre-input"
            name="genre"
            onChange={(event) => this.setState({genre: event.target.value})}>
            
            <option value="action" data-testid="genre-option">
            Ação
            </option>
            <option value="comedy" data-testid="genre-option">
            Comédia
            </option>
            <option value="thriller" data-testid="genre-option">
            Suspense
            </option>
            </select>
       
             <button data-testid="send-button" onClick={this.sendForm}>Adicionar filme</button>           
              </div>
            </form>
            </div>
        )
    }
} 

AddMovie.propTypes = { onClick: PropTypes.func.isRequired }

export default AddMovie;