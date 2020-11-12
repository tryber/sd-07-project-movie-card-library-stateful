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
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        const { onClick } = this.props;

        return (
            <form data-testid="add-movie-form">
                <label data-testid="title-input-label">Título</label>
                <input name="title" onChange={this.changeStateValue} data-testid="title-input" value={this.state.title} />
                <label data-testid="subtitle-input-label">Subtítulo</label>
                <input name="subtitle" onChange={this.changeStateValue} data-testid="subtitle-input" value={this.state.subtitle} />
                <label data-testid="image-input-label">Imagem</label>
                <input name="imagePath" data-testid="image-input" onChange={this.changeStateValue} value={this.state.imagePath} />
            </form>
        );
    }
}

export default AddMovie;
