import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

class Count extends Component {

    state = {};

    increment = () => {
        const {value} = this.selectNumber;
        this.props.increment(value * 1);
    }

    decrement = () => {
        const {value} = this.selectNumber;
        this.props.decrement(value * 1);
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.ascnyIncrement(value * 1, 500);
    }

    render() {
        return (
            <div>
                <h1>当前数字为: {this.props.count}</h1>
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

// 使用connect()()创建并暴露一个容器组件
export default connect(
    state => ({count: state}),

    // mapDispatchToProps 的一般写法
    /*dispatch => ({
        increment: number => dispatch(createIncrementAction(number)),
        decrement: number => dispatch(createDecrementAction(number)),
        ascnyIncrement: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    })*/

    // mapDispatchToProps简写
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        ascnyIncrement: createIncrementAsyncAction
    }
)(Count);
