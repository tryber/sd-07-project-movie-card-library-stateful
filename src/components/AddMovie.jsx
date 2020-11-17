// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  handleSearchValue({ target }) {
    this.setState({ [target.id]: target.value });
  }

  render() {
    return (
      <form className="cadastrar-filme" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título

          <input
            type="text"
            name="title"
            id="title"
            data-testid="title-input"
            value={this.state.title}
            onChange={this.handleSearchValue}
          />
        </label>
      </form>
    );
  }
}


export default AddMovie;
