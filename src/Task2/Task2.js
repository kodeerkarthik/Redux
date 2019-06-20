import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increaseA,increaseB,increaseC,increaseD} from '../Action/Task2action';
class Task2 extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th className='space'><h1>{this.props.a}</h1></th>
                        <th className='space'><h1>{this.props.b}</h1></th>
                        <th className='space'><h1>{this.props.c}</h1></th>
                        <th className='space'><h1>{this.props.d}</h1></th>
                    </tr>
                    <tr>
                        <td className='space'><button onClick={()=>this.props.increaseA(this.props.c)}>Update A</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseB(this.props.d)}>Update B</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseC(this.props.a)}>Update C</button></td>
                        <td className='space'><button onClick={()=>this.props.increaseD(this.props.b)}>Update D</button></td>
                    
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
 
    const {a}=state.Task2reducer;
    const {b}=state.Task2reducer1;
    const {c}=state.Task2reducer2;
    const {d}=state.Task2reducer3;
    return {a,b,c,d};
};
export default connect (mapStateToProps,{increaseA,increaseB,increaseC,increaseD})(Task2)