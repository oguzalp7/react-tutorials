import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// implement class
class App extends Component{

  constructor(){
    super();
    this.state = {
      // added hardcoded array into code.
      monsters: [],
    };
  }

  componentDidMount(){
    /* 
    In this particular function, that checks if the content fully loaded or not.
    Tbh, I don't get the idea but what I know is, this is the best way to make a GET request and put the data 
    into a variable.
    */

    // get request on jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())  
      .then((users) => 
        this.setState(
          () => {
            return {monsters: users};
          },
          () => {
            console.log(this.state);
          }
        )
      );
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
