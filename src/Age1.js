import React, { Component } from 'react';
import {connect} from "react-redux";

class Age1 extends Component {
    render() {
        return (
            <div>
                <h1>Your Age: {this.props.age}</h1>
                <button onClick={this.props.onAgeUp}>AgeUp</button>
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { age:state.age };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp : () =>dispatch({type:"AGE_UP",value:1})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Age1);