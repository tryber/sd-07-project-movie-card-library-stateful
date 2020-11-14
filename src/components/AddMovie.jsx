import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: "",
      // storyline: "",
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /** { imagePath, storyline, rating, genre }  */

  handleChange({ target }) {
    const { name } = target;
    // eslint-disable-next-line prefer-destructuring
    const value = target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title-input" data-testid="title-input-label">
                Título
            <input
              value={title}
              data-testid="title-input"
              id="title-input"
              onChange={this.handleChange}
              type="text"
            />
          </label>
          <label
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label"
          >
          Subtítulo
            <input
              id="subtitle-input"
              value={subtitle}
              data-testid="subtitle-input"
              type="text"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
