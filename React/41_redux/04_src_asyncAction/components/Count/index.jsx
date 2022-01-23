import React, {Component} from 'react';
import store from '../../redux/store'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

class Count extends Component {

    state = {};

    /* componentDidMount() {
         // 检测redux中状态的变化，变化则调用render
         store.subscribe(() => {
             this.setState({});
         });
     }*/

    increment = () => {
        const {value} = this.selectNumber;
        store.dispatch(createIncrementAction(value * 1));
    }

    decrement = () => {
        const {value} = this.selectNumber;
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber;
        // setTimeout(() => {
        store.dispatch(createIncrementAsyncAction(value * 1, 500))
        // }, 1000);
    }

    render() {
        return (
            <div>
                <h1>当前数字为: {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;