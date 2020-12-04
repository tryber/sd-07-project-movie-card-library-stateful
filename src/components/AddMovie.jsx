import React from 'react';



class AddMovie extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      'title': '',
      'subtitle': '',
      'imagePath': '',
      'sotryLine': '',
      'rating': 0,
      'genre': 'action'
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="titulo" 
        data-testid="title-input-label">Título</label>
        <input 
          type="text" 
          name="titulo" 
          data-testid="title-input" 
          value={this.state.title} 
          onChange={(event) => this.setState({title:event.target.value})}data-testid="title-input"
        />
        <label htmlFor="titulo" data-testid="subtitle-input-label">Subtítulo</label>
        <input 
          type="text" 
          name="subtitulo" 
          data-testid="title-input" 
          value={this.state.subtitle} 
          onChange={(event) => this.setState({subtitle:event.target.value})}
        />
        
      </form>
    )
  }
}

export default AddMovie;
