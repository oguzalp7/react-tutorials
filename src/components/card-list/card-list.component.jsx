import { Component } from "react";
import './card-list.styles.css';

// begining of card list class
class CardList extends Component{
    render() {
        
        const { monsters } = this.props;
        
        /*
        Apply same beheaviour in the CardList class. The behaviour is deleted from the App.js        
        */
        return(
            <div className="card-list">
                {
                    /*
                    map function: makes list/arrays mapped. 
                    So we don't need any "for" or "while" loops in order to iterate on
                    elements in an array. Bellisimo :) 
                    */
                    monsters.map((monster) => (
                        <div className='card-container' key={monster.id}> 
                            <img 
                                alt={'monster ${monster.name}'} 
                                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                            />
                            <h2>{monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>
                    ))
                }
            </div>
        ); 
    }
}

// export the class to use in App.js
export default CardList