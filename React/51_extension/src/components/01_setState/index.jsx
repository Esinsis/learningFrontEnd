import React, {Component} from 'react';

class Demo extends Component {

    state = {count: 0};

    add = () => {
        // const {count} = this.state;
        // this.setState({count: count + 1}, () => {
        //     console.log(this.state.count);
        // });

        /* 函数式的setState */
        this.setState(state => ({count: state.count + 1}));
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default Demo;