// implement AddMovie component here
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
        }
    }

    changeStateValue = ({target}) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        })
    }

    addMovieForm = () => {
        const { onClick } = this.props;
        onClick(this.state);

        this.setState({
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action'
        })
    }

    render() {

        return (
            <form data-testid="add-movie-form">
                <label data-testid="title-input-label">Título</label>
                <input name="title" onChange={this.changeStateValue} data-testid="title-input" value={this.state.title} />
                <label data-testid="subtitle-input-label">Subtítulo</label>
                <input name="subtitle" onChange={this.changeStateValue} data-testid="subtitle-input" value={this.state.subtitle} />
                <label data-testid="image-input-label">Imagem</label>
                <input name="imagePath" data-testid="image-input" onChange={this.changeStateValue} value={this.state.imagePath} />
                <label data-testid="storyline-input-label">Sinopse</label>
                <textarea data-testid="storyline-input" name="storyline" onChange={this.changeStateValue} value={this.state.storyline}></textarea>
                <label data-testid="rating-input-label">Avaliação</label>
                <input data-testid="rating-input" onChange={this.changeStateValue} name="rating" type="number" value={this.state.rating} />
                <label data-testid="genre-input-label">Gênero</label>
                <select name="genre" data-testid="genre-input" value={this.state.genre} onChange={this.changeStateValue}>
                    <option data-testid="genre-option" value="action">Ação</option>
                    <option data-testid="genre-option" value="comedy">Comédia</option>
                    <option data-testid="genre-option" value="thriller">Suspense</option>
                </select>
                <button onClick={this.addMovieForm} data-testid="send-button">Adicionar filme</button>
            </form>
        );
    }
}

export default AddMovie;
