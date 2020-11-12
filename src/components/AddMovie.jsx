import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="search-title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="search-title"
            value={this.pros.title}
            // onClick={onClick}
            data-testid="title-inpu"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
