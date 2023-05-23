import { Component } from "react";


// begining of card list class
class CardList extends Component{
    render() {

        //debug what props are;
        console.log(this.props);

        return(
            <div>This is the CardList Component</div>
        ); 
    }
}

// export the class to use in App.js
export default CardList