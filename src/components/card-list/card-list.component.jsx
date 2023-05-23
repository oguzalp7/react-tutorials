import { Component } from "react";


// begining of card list class
class CardList extends Component{
    render() {
        console.log('render');
        const { monsters } = this.props;

        /*
        Apply same beheaviour in the CardList class. The behaviour is deleted from the App.js        
        */
        return(
            <div>
                {
                    /*
                    map function: makes list/arrays mapped. 
                    So we don't need any "for" or "while" loops in order to iterate on
                    elements in an array. Bellisimo :) 
                    */
                    monsters.map((monster) => (
                        <h1 key={monster.id}> { monster.name }</h1>
                    ))
                }
            </div>
        ); 
    }
}

// export the class to use in App.js
export default CardList