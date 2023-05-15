import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// implement class
class App extends Component{

  constructor(){
    super();
    this.state = {
      // added hardcoded array into code.
      monsters: [
        {
          name: 'Linda',
          id: '52g75gh3sxqf'
        },
        {
          name: 'Frank',
          id: '76stga2736r'
        },
        {
          name: 'Jacky',
          id: 'g7t346ys'
        },
        {
          name: 'Ozi',
          id: '278w93ruf'
        },
      ]
    };
  }


  render(){
    return (
      <div className="App">
        {
          /*
          map function: makes list/arrays mapped. 
          So we don't need any "for" or "while" loops in order to iterate on
          elements in an array. Bellisimo :) 
          */
          this.state.monsters.map((monster) => {
              return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>);
            }
          )
        }
      </div>
    );
  }
}

export default App;
