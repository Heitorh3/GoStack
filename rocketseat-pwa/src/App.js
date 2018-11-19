import React, { Component, Fragment } from 'react';
import axios from 'axios';

import {header, repositorys} from './style';

class App extends Component {
  state = {
    newRepoInput: '',
    repositories: []
  };
  
  addRepository = async () =>{
    if(!this.state.newRepoInput) return;
    const resposta =  await axios.get(`https://github.com/${this.state.newRepoInput}`);

    this.setState({
      newRepoInput: '',
      repositories: [...this.state.repositories, resposta.data]
    });
  };

  render() {
    return (
      <Fragment className="App">
         <header>
           <input ref={el =>this.inputEl = el}
                placeholder="Adcionar repositorio"
                onChange={e => this.setState({newRepoInput: e.target.value})}
                value={this.state.newRepoInput}/>

            <button onClick={this.addRepository()}>
                Adicionar
            </button>

            <repositorys>
              {this.state.repositories.map(repository =>(
                <li key={repository.id}>
                  <img src={repository.owner.avatar_url}/>
                  <strong>{repository.name}</strong>
                  <p>{repository.description}</p>
                  <a href={repository.html_url}>Acessar</a>
                </li>
              ))}
            </repositorys>
           
         </header>
      </Fragment>
    );
  }
}

export default App;
