import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="inputAddMovie" data-testid="title-input-label">Título</label>
        <input
          value={this.title}
          data-testid="title-input"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddMovie;
