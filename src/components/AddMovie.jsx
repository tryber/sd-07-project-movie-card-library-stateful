import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // subtitle: "",
      title: '',
      // imagePath: "",
      // storyline: "",
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /** let { subtitle, title, imagePath, storyline, rating, genre }  */

  handleChange(event) {
    const state = this.state;
    state.title = event.target.value;
    this.setState(state);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="title-input-label">
          <label htmlFor="title-input">
                Título
            <input
              value={title}
              data-testid="title-input"
              id="title-input"
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
