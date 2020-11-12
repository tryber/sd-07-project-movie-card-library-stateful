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
      genre: 'action',
    };
  }

  changeTitle = event => {
    this.setState({ title: event.target.value })
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">Título</label>
          <input
            data-testid="title-input"
            id="title-input"
            value={this.state.title}
            onChange={this.changeTitle}>
          </input>
        </form>
      </div>
    );
  }
}

export default AddMovie;
