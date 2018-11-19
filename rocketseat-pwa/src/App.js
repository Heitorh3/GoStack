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
                placeholder="Acionar repositorio"
                onChange={e => this.setState({newRepoInput: e.target.value})}
                value={this.state.newRepoInput}/>

            <button onClick={this.addRepository()}>
                Adicionar
            </button>

           
         </header>
      </Fragment>
    );
  }
}

export default App;
