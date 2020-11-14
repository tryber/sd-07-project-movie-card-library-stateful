// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.updateStatus = this.updateStatus.bind(this);
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }

  // updateStatus(event) {
  //   this.setState({
  //     title: event.target.value,
  //   })
  // }

  render () {
    return (
      <form data-testid="add-movie-form">
        {/* <label htmlFor="titulo" data-testid="title-input-label">
          Título
        </label>
        <input
        type="text"
        id="titulo"
        value={this.state.title}
        data-testid="title-input"
        onChange={updateStatus}
        /> */}
      </form>
    );
  }
}

export default AddMovie;
