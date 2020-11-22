import React from 'react';



class AddMovie extends React.Component {
  constructor(props) {  
    super(props);
    this.state = {
      'title': 'harry pobre',
    }
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="titulo" data-testid="title-input-label" >Título</label>
        <input 
          type="text" 
          name="titulo" 
          data-testid="title-input" 
          value={this.state.title} 
          onChange={(event) => this.setState({title:event.target.value})}
        />
      </form>
    )
  }
}

export default AddMovie;
