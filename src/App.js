import { Component } from 'react';

//import CardList from the other module.
import CardList from './components/card-list/card-list.component';

// import css for related html components.
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

      // initialize the search filed in order to do dynamic search on the list of elements.
      searchField: '',
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
        )
      );
  }

  /*
  OPTIMIZATION: We took out the callback function outside
  of the render function, in order to prevent rendering each time.
  */
  onSearchChange = (event) => {
    // print the value that entered to input box.
    //console.log(event.target.value);
    
    // save the searched string into a variable, and make it lowercase.
    const searchField = event.target.value.toLocaleLowerCase();


    // alter the state.
    this.setState(() => {
      return {searchField};
    });
  }

  render(){

    // make optimizations
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // filter the elements related to the input text
    const filteredMonsters = monsters.filter((monster) => {

      // convert monster name into lowercase manner and concat with includes function.
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

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
          <input 
            className='search-box'
            type='search' 
            placeholder='search monsters'
            onChange={onSearchChange}
          />
        {
          
          // the props are the basically parameters that sends to the class and we can use them in the ./components/card-list/card-list.component.jsx
          <CardList monsters={filteredMonsters} />
        }
      </div>
    );
  }
}

export default App;
