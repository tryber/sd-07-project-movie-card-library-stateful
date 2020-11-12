// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    }
  }

  handleChanges = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {onClick} = this.props;

    return (
      <form>
        <label data-testid="title-input-label">Título
          <input
            name="title"
            type="text"
            value={this.state.title}
            data-testid="title-input"
            onChange={this.handleChanges} />
        </label>
      </form>
    );
  }
}

export default AddMovie;