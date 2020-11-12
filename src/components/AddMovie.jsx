// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'subtitle': '',
      'title': '',
      'imagePath': '',
      'storyline': '',
      'rating': 0,
      'genre': 'action'
    }
  }
  render() {
    const { onClick } = this.props;
    return (
      // - subtítulo
      // - título
      // - caminho da imagem
      // - sinopse
      // - avaliação
      // - gênero
    );
  }
}

export default AddMovie;
