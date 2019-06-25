import React, { Component } from 'react';
// var reqobj={};
class Form extends Component {
    constructor(props) {  
        super(props);   
    this.state={
        name:'',
        age:'',
        city:'',
        address:'', 
        name1:'',
        age1:'',
        city1:'',
        address1:''
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    
}
handleClick=()=>{
    this.setState({name1:this.state.name,age1:this.state.age,city1:this.state.city,address1:this.state.address,
    });
}

    render() {
        return (
            <div >
                <form>
                    <label>Name</label><br></br>
                    <input type='text' name='name' onChange={this.handleChange} ></input><br></br>
                    <label>Age</label><br></br>
                    <input type='text' name='age' onChange={this.handleChange} ></input><br></br>
                    <label>City</label><br></br>
                    <input type='text' name='city' onChange={this.handleChange} ></input><br></br>
                    <label>Address</label><br></br>
                    <input type='text' name='address' onChange={this.handleChange} ></input><br></br>
                    
                    <button type='button' onClick={this.handleClick}>submit</button>
                    {/* <input type='button' onClick={this.handleClick} value="click"></input> */}

                </form>
                <div>
                <table>
                    <tr>
                        <th >NAME</th>
                        <th >AGE</th>
                        <th >CITY</th>
                        <th>ADDRESS</th>
                    </tr>
                    <tr>
                        <td >{this.state.name1}</td>
                        <td >{this.state.age1}</td>
                        <td >{this.state.city1}</td>
                        <td >{this.state.address1}</td>
                    </tr>
                </table>
                </div>
                
            </div>
        );
    }
}

export default Form;