import React from 'react';

export class Select extends React.Component {
 render() {
   //retirar prop e adicionar as PropTypes
   const prop = this.props;
   const { label, select, changeSetState, option} = prop;
   return (
    <label {...label} htmlFor={select.id} >
      {label.content}
      <select {...select} onChange={(e) => {changeSetState(e.target.id, e.target.value)}}>
        {option.map(element => 
          <option {...element} data-testid="genre-option" >{element.content}</option>
        )}
      </select>
    </label>
   )
 }
}

export class Inputs extends React.Component {
  render() {
    //retirar prop e adicionar as PropTypes
    const prop = this.props;
    const {label, input, changeSetState} = prop;
    return (
      <label htmlFor={input.id} {...label} >
        {label.content}
      <input
        {...input}
        onChange={(e) => {
          const { id, value } = e.target;
          changeSetState(id, value);
        }}
      />
    </label>)
  }
}

class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    this.stateChange = this.stateChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  stateChange(key, value) {
    this.setState({ [key]: value });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    //retirar prop e adicionar as PropTypes
    const prop = this.props;
    const { title, subtitle, imagePath, rating, genre } = this.state;
    const { stateChange } = this;
    return (
      <form data-testid="add-movie-form" >

        <Inputs 
        input={{ value: title, 'data-testid': "title-input", id: 'title' }}
        label={{ content: 'Título', 'data-testid': "title-input-label" }}
        changeSetState={stateChange}
        />

        <Inputs 
        input={{ value: subtitle, 'data-testid':"subtitle-input", id: 'subtitle' }}
        label={{ content: 'Subtítulo', 'data-testid': "subtitle-input-label" }}
        changeSetState={stateChange}
        />

        <Inputs 
        input={{ value: imagePath, 'data-testid':"image-input", id: 'imagePath' }}
        label={{ content: 'Imagem', 'data-testid': "image-input-label" }}
        changeSetState={stateChange}
        />

        <label htmlFor="storyline" data-testid="storyline-input-label" >
          Sinopse
          <textarea
          id="storyline"
          value={this.state.storyline}
          data-testid="storyline-input"
          onChange={(e) => { this.stateChange(e.target.id, e.target.value); }}
          />
        </label>

        <Inputs
        input={{ type: 'number', value: rating, 'data-testid': "rating-input", id: 'rating' }}
        label={{ content: 'Avaliação', 'data-testid': "rating-input-label" }}
        changeSetState={stateChange}
        />

        <Select
          select={{ 'data-testid': "genre-input", value: genre, id: 'genre' }}
          label={{ 'data-testid': "genre-input-label", content: 'Gênero' }}
          option={[
            { value: "action", content: 'Ação' },
            { value: "comedy", content: 'Comédia' },
            { value: "thriller", content: 'Suspense' }
          ]}
          changeSetState={stateChange}
        />

        <button
          data-testid="send-button"
          onClick={() => {
            prop.onClick(this.state);
            this.resetState();
          }}
        >Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;