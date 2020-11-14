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
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
  }
  /** { imagePath, storyline, rating, genre }  */

  handleChangeTitle(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.title = event.target.value;
    this.setState(state);
  }

  handleChangeSubtitle(event) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    state.subtitle = event.target.value;
    this.setState(state);
  }

  render() {
    const { subtitle, title } = this.state;
    return (
      <div>
        <form data-testid="title-input-label">
          <label htmlFor="title-input">
                Título
            <input
              value={title}
              data-testid="title-input"
              id="title-input"
              onChange={this.handleChangeTitle}
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
              onChange={this.handleChangeSubtitle}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
