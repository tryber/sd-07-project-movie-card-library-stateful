import React, { Component } from 'react';
class AddMovie extends Component {
    constructor(){
        super()
        this.handleState = this.handleState.bind(this);
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action'
        }
    }

    handleState(value){
        this.setState({title: value});
    }
    render() {
        const { onclick } = this.props;
    return (
      <div>
        <form>
            <label data-testid="title-input-label" >Título</label>
            <input type='text' value={this.state.title} data-testid="title-input" onChange={this.handleState}></input>
        </form>
      </div>
    );
  }
}
export default AddMovie;
