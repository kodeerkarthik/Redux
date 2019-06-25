import React, { Component } from 'react';
import {connect} from 'react-redux';
import {display,handleChange} from '../Action/Task4action';
class Task4 extends Component{
    render(){
        return(
            <div>
                Name:
                <input type='text' name='name' onChange={this.props.handleChange} ></input><br/>
                Age:
                <input type='text' name='age' onChange={this.props.handleChange} ></input><br/>
                City:
                <input type='text' name='city' onChange={this.props.handleChange} ></input><br/>
                Address:
                <input type='text' name='address' onChange={this.props.handleChange} ></input><br/>
                <button onClick={this.props.display}> display</button><br/><br/><br/>
                <table>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CITY</th>
                        <th>ADDRESS</th>
                    </tr>
                    <tr>
                        <th>{this.props.name}</th>
                        <th>{this.props.age}</th>
                        <th>{this.props.city}</th>
                        <th>{this.props.address}</th>
                    </tr>
                </table>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Task4reducer;
    const{age}=state.Task4reducer;
    const{city}=state.Task4reducer;
    const{address}=state.Task4reducer;
    return{name,age,city,address};
};
export default connect(mapStateToProps,{handleChange},{display})(Task4);