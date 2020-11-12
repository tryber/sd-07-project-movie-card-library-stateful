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

    addTitle = ({target}) => {
        this.setState({
            title: target.value
        })
    }

    render() {
        const { onClick } = this.props;

        return (
            <form data-testid="add-movie-form">
                <label data-testid="title-input-label">Título</label>
                <input onChange={this.addTitle} data-testid="title-input" value={this.state.title} />
            </form>
        );
    }
}

export default AddMovie;
