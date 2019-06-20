import React, { Component } from 'react';
import {connect} from "react-redux";

class Task1 extends Component {
    render() {
        return (
            <div className="task1">
                <table>
                    <tr>
                        <th className='space'><h1>{this.props.a}</h1></th>
                        <th className='space'><h1>{this.props.b}</h1></th>
                        <th className='space'><h1>{this.props.c}</h1></th>
                        <th className='space'><h1>{this.props.d}</h1></th>
                    </tr>
                    <tr>
                        <td className='space'><button onClick={this.props.increaseA}>Update A</button></td>
                        <td className='space'><button onClick={this.props.increaseB}>Update B</button></td>
                        <td className='space'><button onClick={this.props.increaseC}>Update C</button></td>
                        <td className='space'><button onClick={this.props.increaseD}>Update D</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { a:state.a,b:state.b,c:state.c,d:state.d };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increaseA : () =>dispatch({type:"INC_A"}),
        increaseB : () =>dispatch({type:"INC_B"}),
        increaseC : () =>dispatch({type:"INC_C"}),
        increaseD : () =>dispatch({type:"INC_D"})

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Task1);