import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  
  this.onClick = this.onClick.bind(this);
  this.onSendButton= this.onSendButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

  }

  onClick (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSendButton = event => {
    this.onClick(event)
  }

  render () {
    return (
      <form>

        <label data-testid="title-input-label">
          Título
          <input type="text" value={this.state.title} onChange={this.onClick} data-testid="title-input"/>
        </label>

        <label data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.onClick} data-testid="subtitle-input"/>
        </label>

        <label data-testid="storyline-input-label">
          Sinopse
          <textarea value={this.state.storyline} onChange={this.onClick} data-testid="stpryline-input"> 
          </textarea>
        </label>

        <label data-testid="rating-input-label">
          Avaliação
          <input type="number" value={this.state.rating} onChange={this.onClick} data-testid="rating-input"/>
        </label>

        <label data-testid="genre-input-label">
          Gênero
          <select value={this.state.genre} onChange={this.onClick} data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button data-testid="send-button" onClick={this.onSendButton}>Adicionar filme</button>

      </form>
    )
  }

}
export default AddMovie