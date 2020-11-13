import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">Título</label>
          <input
            data-testid="title-input"
            onChange={this.handleTitleChange}
            value={this.state.title}
          >
          </input>
          <label htmlFor="title-input" data-testid="subtitle-input-label">Subtítulo</label>
          <input
            data-testid="title-input"
            onChange={this.handleTitleChange}
            value={this.state.title}
          >
          </input>
        </form>
      </div>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
