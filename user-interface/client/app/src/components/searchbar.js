import React from 'react';
import '../stylesheets/searchbar.css';
export default class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search_value:  "",
        };
    }
    handle_search_value_change = (event) => {
        this.setState({"search_value": event.target.value});
    };
    handle_key_pressed = (event) => {
        if(event.key === 'Enter'){
            this.props.onSearch(this.state["search_value"]);
        };
    }
    
    render(){
      
        return(
            <input id="searchbar" type="text"  placeholder="Search FAQs..." value={this.state["search_value"]} onChange = {this.handle_search_value_change} onKeyDown={this.handle_key_pressed}/>
           );
    }

}