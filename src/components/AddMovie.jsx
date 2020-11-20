import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: '',
            title: '',
            imagePath: '',
            storyline: '',
            rating: 0,
            genre: 'action'
        }
    }
    render() {
        return (
            <div>
            <form>
             <div>
                <label data-testid="title-input-label">Título</label>
                <input type="text" /* estado incial*/ data-testid="title-input" onChange={/* rever atributo*/}/>
              </div>
              <div>
              <label data-testid="subtitle-input-label">Subtítulo</label>
              <input type="text" /* estado incial*/ data-testid="subtitle-input" onChange={/* rever atributo*/}/>
              </div>
              <div>
                 <label data-test="image-input-label">Imagem</label>
                 <input type="text" /* estado incial*/ data-testid="image-input" onChange={/* rever atributo*/}/>
              </div>
              <div>
                  <label data-test="storyline-input-label">Sinopse</label>
                  <textarea data-testid="storyline-input"/*ESTADO INCIAL */ onChange={/* rever atributo*/}/>
              </div>
              <div>
              <label data-test="rating-input-label">Avaliação</label>
              <input type="number" /* estado incial*/ data-testid="rating-input" onChange={/* rever atributo*/}/>
              </div>
              <div>
              <label data-test="genre-input-label">Genero</label>
              <select  /* estado incial*/ data-testid="genre-input" onChange={/* rever atributo*/}>
               <option value="action" data-testid="genre-option">Ação</option>
               <option value="comedy" data-testid="genre-option">Comédia</option>
               <option value="thriller" data-testid="genre-option">Suspense</option>
               </select>
               </div>
               <div>
             <button data-testid="send-button" onClick={/* Fazer função */} >Adicionar Filmes</button>           
              </div>
            </form>
            </div>
        )
    }
}

AddMovie.prototype = { onClick: PropTypes.func.isRequired }

export default AddMovie;