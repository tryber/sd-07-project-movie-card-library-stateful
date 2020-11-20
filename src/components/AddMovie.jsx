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
                
              </div>
            </form>
            </div>
        )
    }
}

AddMovie.prototype = { onClick: PropTypes.func.isRequired }

export default AddMovie;