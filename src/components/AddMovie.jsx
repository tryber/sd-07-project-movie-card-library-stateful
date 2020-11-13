// implement AddMovie component here
import { render } from 'enzyme';
import React from 'react'

class AddMovie extends React.Component{

    render() {

    return (
        <div>
            <form>
                <label data-testid="title-input-label" htmlFor="title-input">
                    Título
                <input
                data-testid="title-input"
                id="title-input"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.changeInput}
                />
                </label>

                <label  htmlFor="subtitle-input">
                    subtitulo
                <input
                data-testid="title-input"
                id="subtitle-input"
                type="text"
                name="subtitle"
                />
                </label>

                <label  htmlFor="imagem-input">
                    imagem
                <input
                data-testid="title-input"
                id="imagem-input"
                type="text"
                name="imagem"
                />
                </label>

                <label  htmlFor="sinopse-input">
                    sinopse
                <textarea
                data-testid="title-input"
                id="sinopse-input"
                type="text"
                name="sinopse"
                />
                </label>
                <label  htmlFor="aval-input">
                    avaliação
                <input
                data-testid="title-input"
                id="aval-input"
                type="text"
                name="avaliação"
                />
                </label>
                <label htmlFor="genre-input">
                    <select name="genre" id="genre-input">
                        <option value="action" data-testid="select-option">Ação</option>
                        <option value="comedy" data-testid="select-option">Comédia</option>
                        <option value="thriller" data-testid="select-option">Suspense</option>
                    </select>
                </label>
            </form>
        </div>
        );
    }
}

