import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// implement class
class App extends Component{

  constructor(){
    super();
    this.state = {
      name: { firstName: 'Ozi', lastName: 'sglam'}, 
      company: 'LV',
    };
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName}, I work at {this.state.company}.
          </p>
          <button
          // set a custom function for the button
           onClick={ () => {
              this.setState(
                () => {
                  return {
                    name: { firstName: 'Oguz', lastName: 'Saglam'},
                  };
                },
                // handle async callbacks
                () => {
                  console.log(this.state);
                }
              );
           }} 
           >
            Change Name
           </button>
        </header>
      </div>
    );
  }
}

/*function App() {
  
}*/

export default App;
