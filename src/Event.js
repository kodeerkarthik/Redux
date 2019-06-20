import React, { Component } from 'react';


class Event extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name:"",       
        arry:[]
    };
}
handleChange=(event) =>{
    this.setState({name: event.target.value});
}
add=()=>{
    this.state.arry.push(this.state.name);
    this.setState({arry:this.state.arry});  
}
    
render() {
    return (
        <form >
            <h1>{this.state.name}</h1>
            <input type='text' onChange={this.handleChange} ></input>
            <input type="button" onClick={this.add} value='submit'></input>
            <h1>{this.state.arry}</h1>
            
        </form>
        );
    }
}

export default Event;


