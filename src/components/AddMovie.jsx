import React from 'react';

class AddMovie extends React.Component {
  render() {
    // const { subtitle, title, imagePath, storyLine, rating, genre } = this.props.values;
    
    return (
      <form>
        <div>
          <label data-testid="title-input-label">Título</label>
          <input data-testid="title-input" type="text"  onChange={this.props.handleChange}></input>
        </div>
        <div>
          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input data-testid="subtitle-input" type="text"  onChange={this.props.handleChange} />
        </div>

      </form>
    );
  }
}

export default AddMovie;
