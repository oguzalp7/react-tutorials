import { Component } from "react";

class SearchBox extends Component{

    render() {

        
            /*create a search box input, that makes case-insenstive filtering.
              ARGS: 
                - className: class name in order to edit the element in CSS manner.
                - type: search, indicates that this is a search box
                - placeholder: When the input is empty, this parameter allows to add information about the search box
                - onChange: takes a function argument in order to interact with the input box.
            */
        
        return (
            <input 
                    className={this.props.className}
                    type='search' 
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
            />      
        )
    }

}

export default SearchBox;