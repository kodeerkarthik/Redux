import React, { Component} from 'react'
import {connect} from 'react-redux';
import {onAgeUp,onAgeDown} from './Action/AgeUpDownAction';
class AgeUpDown extends Component {
    render(){
        return(
            <div>
                Your Age : <span>{this.props.age}</span>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>

        );
    }
}
const mapStateToProps=(state)=>{
    const {age}=state.AgeUpDownReducers;
    return {age};
};
export default connect (mapStateToProps,{onAgeUp,onAgeDown})(AgeUpDown);