import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Dataflow: 
- Initialize state
- Render initial component UI
- Make API call life-cylce and let React handle re-rendering
*/

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
        /*create a search box input, that makes case-insenstive filtering.
          ARGS: 
            - className: class name in order to edit the element in CSS manner.
            - type: search, indicates that this is a search box
            - placeholder: When the input is empty, this parameter allows to add information about the search box
            - onChange: takes a function argument in order to interact with the input box.
        */
        }
          <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
              // print the value that entered to input box.
              console.log(event.target.value);
              
              // save the searched string into a variable, and make it lowercase.
              const searchString = event.target.value.toLocaleLowerCase();

              // filter the elements related to the input text
              const filteredMonsters = this.state.monsters.filter((monster) => {

                // convert monster name into lowercase manner and concat with includes function.
                return monster.name.toLocaleLowerCase().includes(searchString);
              });

              // alter the state.
              this.setState(() => {
                return {monsters: filteredMonsters};
              });
            }
          }
          />
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
