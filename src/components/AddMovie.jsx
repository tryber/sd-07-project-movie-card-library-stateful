import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
 render() {
   const { label, select, changeSetState, option} = this.props;
   return (
    <label {...label} htmlFor={select.id} >
      {label.content}
      <select {...select} onChange={(e) => {changeSetState(e.target.id, e.target.value)}}>
        {option.map((element, index) => 
          <option {...element} data-testid="genre-option" key={`genre${index}`} >{element.content}</option>
        )}
      </select>
    </label>
   )
 }
}
Select.propTypes = {
  label: PropTypes.object,
  select: PropTypes.object,
  changeSetState: PropTypes.func,
  option: PropTypes.array
}

class Inputs extends React.Component {
  render() {
    const {label, input, changeSetState} = this.props;
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
Inputs.propTypes = {
  label: PropTypes.object,
  input: PropTypes.object,
  changeSetState: PropTypes.func
}

class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    this.stateChange = this.stateChange.bind(this);
    this.resetState = this.resetState.bind(this);
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
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;
    const { stateChange, resetState, state, props } = this;
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
          value={storyline}
          data-testid="storyline-input"
          onChange={(e) => { stateChange(e.target.id, e.target.value); }}
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
            props.onClick(state);
            resetState();
          }}
        >Adicionar filme</button>

      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func,
}
export default AddMovie;