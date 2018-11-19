import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    newRepoInput: ''
  }
  
  addRepository(){

  }

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

            </repositorys>
           
         </header>
      </Fragment>
    );
  }
}

export default App;
