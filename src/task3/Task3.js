import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleClick} from '../Action/Task3action';

class Task3 extends Component{
    render(){
        return(
            <div> 
            <form>
            <label>Username</label>
                    <input type='text'/>
            <label>Password</label>
                    <input type='text'/>
            </form><br/>
            <button onClick={this.props.handleClick}>Click</button>
            <h1>{this.props.message}</h1>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
  
    const{message}=state.Task3reducer;
    return{message};
};
export default connect(mapStateToProps,{handleClick})(Task3);
